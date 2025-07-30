import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ MongoDB connected successfully')
        
    } catch (error) {
        console.log('❌ MongoDB connection error:', error.message);
        process.exit(1);
    }
}

export default connectDb;