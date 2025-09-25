import axios from "axios"
import { useAtom } from "jotai"
import { useState } from "react"


export const Vote = ()=>{
    const [option, setOption] = useState<string>("")
    const [voted, setVoted] = useState<boolean>(false)

    async function onVote(){
        try{
            const vote = await axios.post('http://localhost:3000/vote',{
                option
            },{
                withCredentials: true
            })
            alert(vote.data.msg)
            setVoted(true)
        }
        catch(e){
            alert("Internal server error")
        }
    }
    if(!voted){
        return <div className="w-screen h-screen flex justify-center items-center">
            <div>
                <h1>Vote your favorite Candidate</h1>
                <div>
                    <label>
                        <input type="radio" name="vote" value={"OptionA"} onChange={e=>setOption(e.target.value)}/> OprionA
                    </label>
                    <label>
                        <input type="radio" name="vote" value={"OptionB"} onChange={e=>setOption(e.target.value)}/> OprionB
                    </label>
                    <label>
                        <input type="radio" name="vote" value={"OptionC"} onChange={e=>setOption(e.target.value)}/> OprionC
                    </label>
                </div>
                <button onClick={onVote}>Vote</button>
            </div>
        </div>
    }

    return <div className="h-screen w-screen flex justify-center items-center">
        Thank you for Voting
    </div>
}