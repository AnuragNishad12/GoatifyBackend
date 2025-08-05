import express from 'express';
import User from '../Models/User.Models.js';

const router = express.Router();

router.post('/signUp', async (req, res) => {
  try {
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

   
    const { UserName, Email, password } = bodyData;

    
    if (!UserName || !Email || !password) {
      return res.status(400).json({
        status: false,
        message: 'UserName, Email, and password are required',
      });
    }

    
    const existingUser = await User.findOne({ Email });
    if (existingUser) {
      return res.status(400).json({
        status: false,
        message: 'User with this email already exists'
      });
    }

    
    const user = new User({
      UserName,
      Email,
      password, 
    });

    await user.save();

   
    const userResponse = {
      _id: user._id,
      UserName: user.UserName,
      Email: user.Email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    };

    return res.status(200).json({
      status: 200,
      message: 'User Created Successfully',
      user: userResponse,
    });

  } catch (error) {
    console.error('Signup error:', error);

    if (error.name === 'ValidationError') {
      return res.status(400).json({
        status: 'Failed',
        message: 'Validation error',
        details: Object.values(error.errors).map(err => err.message)
      });
    }

    if (error.code === 11000) {
      return res.status(400).json({
        status: 'Failed',
        message: 'User with this email already exists'
      });
    }

    return res.status(500).json({
      status: 'Failed',
      message: `Getting exception: ${error.message}`,
    });
  }
});



export default router;
