import express from "express";
import checkingXpPoints from "../Models/CheckTheXpPoints.Model.js";
import getTierAndDivision from "../Utils/getTierAndDivision.js";

const router = express.Router();

router.post("/CheckUsersXP", async (req, res) => {
  let bodyData = req.body;
  if (Buffer.isBuffer(req.body)) {
    try {
      bodyData = JSON.parse(req.body.toString());
    } catch {
      return res
        .status(400)
        .json({ status: false, message: "Invalid JSON format" });
    }
  }

  try {
    const { userId, xp } = bodyData;
    if (!userId || xp === undefined || xp === null) {
      return res
        .status(400)
        .json({ status: "Failed", message: "Missing userId or xp" });
    }

    // 1. Find existing record
    const userRecord = await checkingXpPoints.findOne({ userId });

    const xpValue = Number(xp);
    if (isNaN(xpValue)) {
      return res
        .status(400)
        .json({ status: "Failed", message: "XP must be a number" });
    }

    // 2. Calculate new XP
    const currentXp = userRecord?.xp || 0;
    const updatedXp = currentXp + xpValue; 

    // 3. Get tier and division based on updated XP
    const { tier, division, image } = getTierAndDivision(updatedXp);

    // 4. Update or create the record with new values
    const updatedRecord = await checkingXpPoints.findOneAndUpdate(
      { userId },
      { $set: { xp: updatedXp, tier, divison: division, image: image } },
      { new: true, upsert: true }
    );

    return res.json({
      status: true,
      message: "XP, tier and division updated successfully",
      data: updatedRecord,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: "Failed", message: `Exception: ${error.message}` });
  }
});

export default router;
