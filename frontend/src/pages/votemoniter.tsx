import axios from "axios"
import { useEffect, useState } from "react"
import { BarChart } from "@mui/x-charts/BarChart"

interface VoteSchema {
  A: number
  B: number
  C: number
}

export const VoteMonitor = () => {
  const [votes, setVotes] = useState<VoteSchema>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<VoteSchema>("http://localhost:3000/votes")
        setVotes(res.data)
      } catch (error) {
        console.error("Error fetching votes:", error)
      }
    }
    fetchData()

    const interval = setInterval(fetchData, 5000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-2xl flex flex-col items-center w-[500px]">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Live Vote Count</h2>

        {votes ? (
          <>
            <div className="flex justify-center mb-6">
              <BarChart
                xAxis={[
                  {
                    id: "barCategories",
                    data: ["Option A", "Option B", "Option C"],
                  },
                ]}
                series={[{ data: [votes.A, votes.B, votes.C] }]}
                width={400}
                height={300}
              />
            </div>
            <div className="text-lg font-semibold text-gray-700">
              Total Votes:{" "}
              <span className="text-blue-600">
                {votes.A + votes.B + votes.C}
              </span>
            </div>
          </>
        ) : (
          <p className="text-gray-500 italic">Loading votes...</p>
        )}
      </div>
    </div>
  )
}
