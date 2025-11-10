import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { schema } from "./graphQL/Schema/schema.js";
import { connectDB } from "./db/db.js";
import dotenv from "dotenv";
import {
  getAllCourses,
  getAllUser,
  getCoursesById,
  getUserById,
  getAllLectures,
  getLecturesById,
} from "./controller/main.controller.js";

dotenv.config();

const client = new ApolloServer({
  typeDefs: schema,
  resolvers: {
    Query: {
      users: async () => await getAllUser(),
      courses: async () => await getAllCourses(),
      course: async (_: any, { id }) => await getCoursesById(id),
      lectures: async () => await getAllLectures(),
      lecture: async (_: any, { id }) => await getLecturesById(id),
    },

    User: {
      id: (parent) => parent._id || parent.id,
    },

    Course: {
      id: (parent) => parent._id || parent.id,
      instructor: async (parent) => await getUserById(parent.instructor),
      lectures: async (parent) => await getLecturesById(parent.id), 
    },

    Lecture: {
      id: (parent) => parent._id || parent.id,
      course: async (parent) => await getCoursesById(parent.course),
      video: (parent) => parent.video || null,
    },
  }

});


async function startServer() {
  try {
    const dbUrl: string | undefined = process.env.MONGODB_URI;
    if (!dbUrl) {
      throw new Error("MONGODB_URI is not defined in your .env file");
    }

    await connectDB(dbUrl);

    const { url } = await startStandaloneServer(client, {
      listen: { port: 4000 },
    });

    console.log(`🚀 Server ready at: ${url}`);
    console.log(`🌍 Database connected successfully.`);
  } catch (error) {
    console.error("Failed to start the server:", error);
    process.exit(1);
  }
}

startServer();