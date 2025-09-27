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
        const res = await axios.get<VoteSchema>(`${import.meta.env.VITE_BASE_URL}/votes`,{
          withCredentials:true
        })
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

  return <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
  <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-2xl flex flex-col items-center w-full max-w-md sm:max-w-lg">
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
      Live Vote Count
    </h2>

    {votes ? (
      <>
        <div className="w-full flex justify-center mb-6">
          <BarChart
            xAxis={[
              {
                id: "barCategories",
                data: ["Option A", "Option B", "Option C"],
              },
            ]}
            series={[{ data: [votes.A, votes.B, votes.C] }]}
            width={Math.min(400, window.innerWidth - 80)} // responsive width
            height={300}
          />
        </div>
        <div className="text-lg sm:text-xl font-semibold text-gray-700 text-center">
          Total Votes:{" "}
          <span className="text-blue-600">
            {votes.A + votes.B + votes.C}
          </span>
        </div>
      </>
    ) : (
      <p className="text-gray-500 italic text-center">Loading votes...</p>
    )}
  </div>
</div>

}
