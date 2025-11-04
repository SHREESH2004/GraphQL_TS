import userModels from "../models/user.models.js";

export const getAllUser=async ()=>{
  try {
    const users = await userModels.find();
    return users;
  } catch (error) {
    throw new Error("Error fetching users");
  }
}
