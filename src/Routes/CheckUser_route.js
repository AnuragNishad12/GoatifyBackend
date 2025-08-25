import express from 'express';
import User from '../Models/User.Models.js';

const router = express.Router();

router.post("/check-User",async(req,res)=>{

let bodyData = req.body;
  if (Buffer.isBuffer(req.body)) {
    try {
      bodyData = JSON.parse(req.body.toString());
    } catch {
      return res.status(400).json({ status: false, message: "Invalid JSON format" });
    }
  }

  try {
   const {inputString} = bodyData;

   
   if(!inputString){
    res.status(400).json({Status:Failed,message:"Input String is Required"});
   }

   

   const checkUser = await User.findOne({ _id: inputString });

   if(checkUser){
    return res.json({ exists: true, checkUser });
    } else {
      return res.json({ exists: false, message: "User not found" });
    }
   

  } catch (error) {
    console.log(`Getting Error ${error}`);
    return res.status(500).json({error:`Getting Error ${error}`})
  }



});

export default router;
