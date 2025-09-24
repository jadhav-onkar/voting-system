import express from "express";
import cors from 'cors'
import { prisma } from "#db/db.js";
import jwt from 'jsonwebtoken';
import cookieParser from "cookie-parser";
import { authMiddleware } from "#middleware/middleware.js";
const port = process.env.PORT ?? "9001";

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());


app.post('/register', async (req,res)=>{
  const name:string = req.body.name;
  if(!name) {res.status(403).send("enter name first")}
  try{
    const user = await prisma.user.create({
      data:{
        name
      }
    })
    const token = await jwt.sign({id: user.id}, process.env.JWT_SECRET || "")
    res.cookie("token" ,`Bearer ${token}`)
    res.status(200).json({msg:"user created"})
  }
  catch(e){
    res.status(500).json({
      msg:"internal server error",
      e
    })
  }
})

app.post('/vote', authMiddleware ,async (req,res)=>{
  const option = req.body.option;
  if(!option){return res.status(403).send("please select an option")}

  try{
    const vote = await prisma.vote.create({
      data:{
        vote: option,
        userId: req.userId
      }
    })
    res.clearCookie("token")
    res.status(200).json({
      msg:"Thank you for your vote"
    })
  }
  catch(e){
    return res.status(500).json({
      msg:"internal server error",
      e
    })
  }
})

app.get('/votes', async (req,res)=>{
  try{
    const voteA = await prisma.vote.count({where:{vote: "OptionA"}})
    const voteB = await prisma.vote.count({where:{vote: "OptionB"}})
    const voteC = await prisma.vote.count({where:{vote: "OptionC"}})
    res.status(200).send({
      A: voteA,
      B: voteB,
      C: voteC
    })
  }
  catch(e){
    res.send(e)
  }
  
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});