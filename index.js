import express from 'express'
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from 'body-parser';
import proteinRoutes from './src/Routes/Protein_routes.js'
import connectDb from './DB/connection.js'
import signUp from './src/Routes/SignUp.Auth.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT||3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", proteinRoutes);
app.use("/api",signUp);

connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`🚀 Server running at http://localhost:${PORT}`);
    })
})


// connectDb();
export default app;