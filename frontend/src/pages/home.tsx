import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

axios.defaults.withCredentials = true;

export const Home = () => {
  const [name, setName] = useState<string>("");
  const navigate = useNavigate()

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault(); // stop page reload
    if (!name) {
      alert("Please enter a name first");
      return;
    }
    try{
        const user = await axios.post("http://localhost:3000/register",
          { name },
          { withCredentials: true }
        );
        alert(user.data.msg);
        navigate('/vote')
    }
    catch(e){
        alert("Internal server error")
    }
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div>
        <h2>Register</h2>
        <form onSubmit={onSubmit}>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Write your name"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
