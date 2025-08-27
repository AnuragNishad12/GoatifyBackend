import mongoose, { Mongoose } from "mongoose";


const CheckingXpPointsSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'GoatifyUser',
        required:true
    },
    xp:{
        type:Number,
        default:0
    },
    tier:{
        type:String,
        required:true
    },
    divison:{
        type:String,
        required:true
    },
    image: { type: String, required:true } 
});


const checkingXpPoints = mongoose.model("checkingXpPoints",CheckingXpPointsSchema);

export default checkingXpPoints;