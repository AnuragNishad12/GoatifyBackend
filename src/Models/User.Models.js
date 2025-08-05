import mongoose from "mongoose";


const UserSchema =new  mongoose.Schema({
    UserName:{
        type:String,
        required:true
    },

    Email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true
    },

}, {timestamps:true});


const User = mongoose.model('GoatifyUser', UserSchema);

export default User;

