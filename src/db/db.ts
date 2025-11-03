import mongoose from "mongoose";

export const connectDB = async (url: string) => {
    try {
        await mongoose.connect(url);
        console.log("DB Connected");
    } catch (err) {
        console.log("DB Connection Error: ", err);
        throw err;
    }
};