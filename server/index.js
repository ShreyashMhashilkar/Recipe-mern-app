import express from "express";
import cors from "cors";
import colors from 'colors';
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);
try{
    mongoose.connect(`mongodb+srv://username:password@cluster0.7lkclym.mongodb.net/recipeapp`)
    console.log(`Server Running on ${mongoose.connection.host}`.bgCyan.white)
}catch(error){
    console.log(`${error}`.bgRed)
}


app.listen(3001, ()=>console.log("server started"));

