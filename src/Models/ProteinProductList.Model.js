import mongoose from "mongoose";

const ProteinListSchema = new mongoose.Schema({
   
    name:{
        type:String,
        required:true
    },

    protein_per_serving:{
        type:String,
        required:true
    },

    serving_size:{
        type:String,
        required:true
    },

},{timestamps:true});

export default mongoose.model("ProteinList",ProteinListSchema);