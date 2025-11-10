import { userModels } from "../models/user.models.js";
import { courseModels } from "../models/Courses.models.js";
import { LectureModel } from "../models/Lecture.models.js";

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

// Removed 'parent' param (not passed by resolver)
// Removed '.populate()' (this is handled by the 'Course.instructor' resolver)
export const getCoursesById = async (id: string) => {
  try {
    const course = await courseModels.findById(id);
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

export const getAllLectures = async () => {
  try {
    return await LectureModel.find();
  } catch (error) {
    throw new Error("Error fetching Lectures");
  }
};

// Removed 'parent' param (not passed by resolver)
// Removed '.populate("video")' (video is a nested object, not a ref)
export const getLecturesById = async (id: string) => {
  try {
    const lecture = await LectureModel.findById(id);
    return lecture;
  } catch (error) {
    // Fixed copy-pasted error message
    throw new Error("Error fetching lecture by ID");
  }
};

// Removed 'getVideoUrlById' function
// It is not used by your server's resolvers, and its logic
// (using .populate("video")) was incorrect.