import mongoose from 'mongoose';

const { Schema } = mongoose;

const lectureSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
    },
    section: {
      type: String,
      required: true,
    },
    duration: {
      type: Number, // We'll store duration in seconds
    },
    video: {
      p480: {
        type: String,
        required: true,
      },
      p720: {
        type: String,
        required: true,
      },
      p1080: {
        type: String,
        required: true,
      },
    },
    course: {
      type: Schema.Types.ObjectId,
      ref: 'Course', // This creates the relationship
      required: true,
    },
  },
  {
    // This adds 'createdAt' and 'updatedAt' fields automatically
    timestamps: true, 
  }
);

export const LectureModel = mongoose.model('Lecture', lectureSchema);