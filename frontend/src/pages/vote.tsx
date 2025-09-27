import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Vote = () => {
  const [option, setOption] = useState<string>("")
  const [voted, setVoted] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate()

  async function onVote() {
    if (!option) {
      alert("Please select an option first")
      return
    }
    if (loading) return 

    try {
      setLoading(true)
      const vote = await axios.post(`${import.meta.env.VITE_BASE_URL}/vote`,{ 
        option 
        },{ 
            withCredentials: true 
        })
        console.log(vote.data)
      alert(vote.data.msg)
      setVoted(true)
      setTimeout(() => {navigate("/")}, 2000)
    } catch (e) {
      
      alert(e)
      navigate("/")
    } finally {
      setLoading(false)
    }
  }

  if (!voted) {
    return (
      <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-96 flex flex-col items-center gap-6">
          <h1 className="text-2xl font-bold text-gray-800 text-center">
            Vote your favorite Candidate
          </h1>
          <div className="flex flex-col gap-4 w-full">
            <label className="flex items-center gap-3 p-2 border rounded-lg cursor-pointer hover:bg-gray-100 transition">
                <input
                type="radio"
                name="vote"
                value="OptionA"
                onChange={(e) => setOption(e.target.value)}
                disabled={loading}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-800 font-medium">Option A</span>
            </label>

            <label className="flex items-center gap-3 p-2 border rounded-lg cursor-pointer hover:bg-gray-100 transition">
                <input
                type="radio"
                name="vote"
                value="OptionB"
                onChange={(e) => setOption(e.target.value)}
                disabled={loading}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-800 font-medium">Option B</span>
            </label>

            <label className="flex items-center gap-3 p-2 border rounded-lg cursor-pointer hover:bg-gray-100 transition">
                <input
                type="radio"
                name="vote"
                value="OptionC"
                onChange={(e) => setOption(e.target.value)}
                disabled={loading}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-800 font-medium">Option C</span>
            </label>
          </div>
          <button
            onClick={onVote}
            disabled={loading}
            className={`w-full py-2 rounded-lg font-semibold transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {loading ? "Submitting..." : "Vote"}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center text-xl font-semibold text-gray-800">
        Thank you for Voting
      </div>
    </div>
  )
}
