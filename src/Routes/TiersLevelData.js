import express from 'express'
import TiersConfigSchemaExport from '../Models/TiersConfigSchema.Model.js'

const router = express.Router();

router.post('/tierlevel',async(req,res)=>{

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

try {
    const config = new TiersConfigSchemaExport(bodyData);
    await config.save();
    res.status(201).json({
      message: "Tiers config saved successfully",
      data: config
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }


});

export default router;