import { userModels } from "../models/user.models.js";
import { courseModels } from "../models/Courses.models.js";
import { LectureModel } from "../models/Lecture.models.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";


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
export const createUser = async (input: { name: any; email: any; role: any; avatar: any; password: any; }) => {

  const { name, email, role, avatar, password } = input;
  const existingUser = await userModels.findOne({ email });
  if (existingUser) {
    throw new Error("A user with this email already exists.");
  }
  const hashedPassword = await bcrypt.hash(password, 12);
  const NewUser = new userModels({
    name,
    email,
    role,
    avatar,
    password: hashedPassword,
    verified: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  })
  try {
    const savedUser = NewUser.save();
    return savedUser;

  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Failed to create user.");

  }


}
