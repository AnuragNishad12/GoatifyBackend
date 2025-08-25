import express from 'express'
import SelectCategory from '../Models/SelectCategory_Model.js'



const router = express.Router();

router.post("/selectCategory",async(req,res)=>{

    let bodyData = req.body;
if (Buffer.isBuffer(req.body)) {
    try {
      bodyData = JSON.parse(req.body.toString());
    } catch {
      return res.status(400).json({ status: false, message: "Invalid JSON format" });
    }
  }


  try {

    const {userID, category} = bodyData;
     
     if (!userID || !category) {
      return res.status(400).json({ status: false, message: "Missing userId or category" });
    }

     
     const updatedCategory = await SelectCategory.findOneAndUpdate(
      { userID: userID },
      { $set: { category: category }, $setOnInsert: { userID: userID } },
      { new: true, upsert: true }
    );

    return res.json({
      status: true,
      message: "Category selected successfully",
      data: updatedCategory,
    });


  } catch (error) {
    console.log(`Getting Exception ${error}`);
    return res.status(500).json({status:Failed, message:`Getting Error ${error}`})
  }


});

export default router
