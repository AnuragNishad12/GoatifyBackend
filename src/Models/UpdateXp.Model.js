import mongoose from "mongoose";



const XpUpdates = mongoose.Schema({

UserId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"GoatifyUser",
    required:true
},

earnedXp:{
    type:Number,
    required:true
}


});


const XpUpdatesExport = mongoose.model("XpUpdatesData",XpUpdates);

export default XpUpdatesExport;