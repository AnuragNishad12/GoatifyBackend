import express from 'express'
import User from '../Models/User.Models.js';


const router = express.Router();

router.post('/login',async(req,res)=>{


    let bodyData = req.body;
if (Buffer.isBuffer(req.body)) {
  try {
    bodyData = JSON.parse(req.body.toString());
    console.log('Parsed body:', bodyData);
  } catch (parseError) {
    return res.status(400).json({
      status: false,
      message: 'Invalid JSON format'
    });
  }
}

const {email,password} = bodyData;

 if (!email || !password) {
    return res.status(400).json({ status: false, error: 'Email and password are required' });
  }

  try {

     
    const user = await User.findOne({ Email: email });
    if (!user) {
      return res.status(404).json({ status: false, error: 'User not found' });
    }

    
    if (user.password !== password) {
      return res.status(401).json({ status: false, error: 'Incorrect password' });
    }

    
    return res.status(200).json({
      status: true,
      message: 'Login successful',
      user: {
        id: user._id,
        UserName: user.UserName,
        Email: user.Email,
      },
    });
  } catch (e) {

    return res.status(500).json({status:Failed,message:`Getting exception ${e}`});

  }
});


export default router;