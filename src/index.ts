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
      users: () => getAllUser(),
      courses: () => getAllCourses(),
      course: (parent: any, args: { id: string }) => getCoursesById(args.id),
      lectures: () => getAllLectures(),
      lecture: (parent: any, args: { id: string }) => getLecturesById(args.id),
    },

    Course: {
      instructor: async (parent: any) => {
        return await getUserById(parent.instructor);
      },
    },
    Lecture: {
      course: async (parent: any) => {
        return await getCoursesById(parent.course);
      },
    },
  },
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