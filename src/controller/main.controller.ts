import { userModels } from "../models/user.models.js";
import { courseModels } from "../models/Courses.models.js";

export const getAllUser = async () => {
  try {
    return await userModels.find();
  } catch (error) {
    throw new Error("Error fetching users");
  }
};

export const getAllCourses = async () => {
  try {
    return await courseModels.find();
  } catch (error) {
    throw new Error("Error fetching courses");
  }
};

export const getCoursesById = async (parent:any,id: string) => {
  try {
    const course = await courseModels
      .findById(id)
      .populate("instructor");

    console.log("Instructor name:", course?.instructor);
    return course;
  } catch (error) {
    throw new Error("Error fetching course by ID");
  }
};

export const getUserById = async (id: string) => {
  try {
    return await userModels.findById(id);
  } catch (error) {
    throw new Error("Error fetching user by ID");
  }
};
