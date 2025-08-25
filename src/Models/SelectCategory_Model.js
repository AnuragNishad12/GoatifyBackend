import mongoose from "mongoose";


const SelectCategorySchema = new mongoose.Schema({
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"GoatifyUser",
        required:true
    },
    category:{
      type:String,
      required:true
    }
},{timestamps:true});


const SelectCategory = mongoose.model("Category",SelectCategorySchema);
export default SelectCategory;



