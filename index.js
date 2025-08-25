import express from 'express'
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from 'body-parser';
import proteinRoutes from './src/Routes/Protein_routes.js'
import connectDb from './DB/connection.js'
import signUp from './src/Routes/SignUp.Auth.js'
import login from './src/Routes/login_route.js'
import tierlevel from './src/Routes/TiersLevelData.js'
import CheckUserXp from './src/Routes/CheckUserXp.Route.js';
import CheckUser from './src/Routes/CheckUser_route.js';
import SelectCategory from './src/Routes/SelectCategory_Route.js'
import AWS from 'aws-sdk';

dotenv.config();

const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

app.use("/api", proteinRoutes);
app.use("/api",signUp);
app.use("/api",login);
app.use("/api",tierlevel);
app.use("/api",CheckUserXp);
app.use("/api",CheckUser);
app.use("/api",SelectCategory);


// connectDb().then(()=>{
//     app.listen(PORT,()=>{
//         console.log(`🚀 Server running at http://localhost:${PORT}`);
//     })
// })


connectDb();
export default app;