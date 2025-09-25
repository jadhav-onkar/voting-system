import axios from "axios"
import { useEffect, useState } from "react"
import { BarChart } from '@mui/x-charts/BarChart';


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
    return ()=>{
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="flex flex-col items-center gap-20">
      <h2 className="text-5xl font-semibold mt-20">VOTES</h2>
      {votes ? (
        <div className="h-100 w-150 flex flex-col items-center">
            <BarChart xAxis={[{
                id: 'barCategories',
                data: ['Option A', 'Option B', 'Option C'],},]}
                series={[{data: [votes.A, votes.B, votes.C],},]}
                />
              <div>Total Votes: {votes.A + votes.B + votes.C}</div>
        </div>
      ) : (
        <p>Loading votes...</p>
      )}
    </div>
  )
}
