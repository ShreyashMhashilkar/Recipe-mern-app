// const mongoose = require('mongoose')
// const colors = require('colors')

import mongoose from "mongoose";
import colors from "colors";
const connectDB = async()=>{
    try{
        await mongoose.connect(`mongodb+srv://username:password@cluster0.7lkclym.mongodb.net/recipeapp`)
        console.log(`Server Running on ${mongoose.connection.host}`.bgCyan.white)
    }catch(error){
        console.log(`${error}`.bgRed)
    }
}

// module.exports = connectDB