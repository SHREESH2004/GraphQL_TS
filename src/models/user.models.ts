import mongoose, { Mongoose } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    role: {
      type: String,
      enum: ["user", "admin", "moderator"], // optional roles
      default: "user",
    },
    avatar: {
      type: String,
      required: true,
      default: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    },
    verified: {
      type: Boolean,
      default: false,
    },
    googleId: {
      type: String,
      default: null,
    },
    password: {
      type: String,
      select: false, // hide from queries by default for security
    },
    facebookId: {
      type: String,
      default: null,
    },
    course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course',
        required:true
    },
  },
  {
    timestamps: true, // automatically adds createdAt and updatedAt
  }
);

export const userModels = mongoose.model("User", userSchema);
