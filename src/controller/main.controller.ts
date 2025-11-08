import {userModels} from "../models/user.models.js";
import { courseModels } from "../models/Courses.models.js";

export const getAllUser = async () => {
  try {
    const users = await userModels.find();
    return users;
  } catch (error) {
    throw new Error("Error fetching users");
  }
}


export const getAllCourses = async () => {
  try {
    const courses = await courseModels.find();
    return courses;

  }
  catch(error){
    throw new Error("Error fetching courses");
  }
}

export const getCoursesbyId=async(parent:any,arg:{id:string})=>{
  const courses=await courseModels.findById(arg.id).populate('instructor');
  return courses;
}