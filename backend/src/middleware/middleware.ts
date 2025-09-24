import { RequestHandler } from "express";
import jwt from 'jsonwebtoken'

interface payload {
    id:string,
    iat:number
}

export const authMiddleware:RequestHandler = async (req,res,next)=>{
    let token:string = req.cookies.token;
    token = token.split(" ")[1]
    
    try{
        const decoded = await jwt.verify(token, process.env.JWT_SECRET || "") as payload
        req.userId = decoded.id
    }
    catch(e){
        return res.status(401).json({
            msg: "unauthorised user",
            e
        })
    }
    next()
} 