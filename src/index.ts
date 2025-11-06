import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { schema } from "./graphQL/Schema/schema.js";
import { connectDB } from "./db/db.js";
import dotenv from "dotenv";
import { getAllCourses, getAllUser } from "./controller/main.controller.js";

dotenv.config();
const client = new ApolloServer({
  typeDefs: schema,
  resolvers: {
    Query: {
      users: () => getAllUser(),
      courses: () => getAllCourses(),
    },
  },
});
async function startServer() {
  try {
    const dbUrl:string|undefined
     = process.env.MONGODB_URI;
    if (!dbUrl) {
      throw new Error("MONGODB_URI is not defined in your .env file");
    }
    await connectDB(dbUrl);
    const users = await getAllUser();
    const courses = await getAllCourses();

    const { url } = await startStandaloneServer(client, {
      listen: { port: 4000 },
    });

    console.log(`🚀 Server ready at: ${url}`);
    console.log(`🌍 Database connected at: ${dbUrl}`);

  } catch (error) {
    console.error("Failed to start the server:", error);
    process.exit(1);
  }
}

startServer();