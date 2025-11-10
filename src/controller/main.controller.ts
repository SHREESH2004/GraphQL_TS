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


export const getCoursesById = async (id: string) => {
  try {
    return await courseModels.findById(id);
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
    throw new Error("Error fetching lectures");
  }
};


export const getLecturesById = async (id: string) => {
  try {
    return await LectureModel.findById(id);
  } catch (error) {
    throw new Error("Error fetching lecture by ID");
  }
};


export const getLecturesByCourseId = async (courseId: string) => {
  try {
    return await LectureModel.find({ course: courseId });
  } catch (error) {
    throw new Error("Error fetching lectures for course");
  }
};
