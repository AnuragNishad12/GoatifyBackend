import express from 'express';
import fs from 'fs';
import upload from '../Middleware/multer.middleware.js';
import User from '../Models/User.Models.js'



const router = express.Router();
    
router.post('/signUp',upload.single('image'),async(req,res)=>{
     try {
        const{UserName,Email,password} = req.body;
        const file = req.file;


        if (!file) return res.status(400).json({ error: 'No image uploaded' });


         // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(file.path, {
      folder: 'users',
    });

        fs.unlinkSync(file.path);

         const user = new User({
      UserName,
      Email,
      password,
      imageUrl: result.secure_url,
    });

     await user.save();

     return res.status(200).json({
        status:200,
        message:'User Created Successfully'+user

     });  
    } catch (error) {
       return res.status(500).json({status:Failed,message:`Getting exception ${error}`});
    }
});

export default  router;