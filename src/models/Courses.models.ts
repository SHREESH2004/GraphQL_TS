import mongoose from "mongoose";

const courseSchema=new mongoose.Schema({

});

export const courseModels = mongoose.model("Course", courseSchema);