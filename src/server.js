import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config(); 

// const app = express();

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server running at http://localhost:${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("Mongo db connection failed")
})

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
//         console.log('Connected to MongoDB');

//         app.listen(process.env.PORT, () => 
//             console.log(`Server running on http://localhost:${process.env.PORT}`)
//         );

//     } catch (error) {
//         console.error('Error:', error);
//         process.exit(1); 
//     }
// })();
