import express from "express";
import checkingXpPoints from "../Models/CheckTheXpPoints.Model";

const router = express.Router();

router.post("/updateXp", async (req, res) => {
  let bodyData = req.body;
  if (Buffer.isBuffer(req.body)) {
    try {
      bodyData = JSON.parse(req.body.toString());
      console.log("Parsed body:", bodyData);
    } catch (parseError) {
      return res.status(400).json({
        status: false,
        message: "Invalid JSON format",
      });
    }
  }

  try {

    const { userId, xp, tier, divison } = bodyData;

    const missingFields = [];
    if (!userId) missingFields.push("userId");
    if (!xp && xp !== 0) missingFields.push("xp");
    if (!tier) missingFields.push("tier");
    if (!divison) missingFields.push("divison");

    if (missingFields.length > 0) {
      return res.json({
        status: "Failed",
        message: `Missing fields: ${missingFields.join(", ")}`,
      });
    }

    const updatedRecord = await checkingXpPoints.findOneAndUpdate(
      { userId }, 
      {
        $set: { tier, divison }, 
        $inc: { xp: xp }, 
      },
      {
        new: true, 
        upsert: true, 
      }
    );

    return res.json({
      status: true,
      message: "XP record updated successfully",
      data: updatedRecord,
    });
  } catch (error) {
    return res.send(500).json({
      status: Failed,
      message: `Getting exception ${error}`,
    });
  }
});
