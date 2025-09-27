import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

axios.defaults.withCredentials = true;

export const Home = () => {
  const [name, setName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name) {
      alert("Please enter a name first");
      return;
    }
    if (loading) return;

    try {
      setLoading(true);
      const user = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/register`,
        { name },
        { withCredentials: true }
      );
      alert(user.data.msg);
      navigate("/vote");
    } catch (e) {
      alert("Internal server error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white mx-5 p-8 rounded-2xl shadow-xl w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Register
        </h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg font-semibold transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
          <button onClick={()=>{navigate('/voting')}} className="w-full py-2 rounded-lg font-semibold transition my-2 bg-blue-600 hover:bg-blue-700 text-white">
            Voting Chart
          </button>
      </div>
    </div>
  );
};
