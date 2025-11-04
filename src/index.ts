import e from "express";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { schema } from "./graphQL/Schema/schema.js";
import { connectDB } from "./db/db.js";
import dotenv from "dotenv";

dotenv.config();
const client=new ApolloServer({
    typeDefs:schema,
    resolvers:{
        Query:{
            hello:()=> 'Hello world!',
            hello2:()=> 'Hello world 2!',
        },
    },
});
async function startServer() {
  try {
    const dbUrl = process.env.MONGODB_URI||"mongodb://localhost:27017/GraphQL";
    if (!dbUrl) {
      throw new Error("MONGODB_URI is not defined in your .env file");
    }

    await connectDB(dbUrl);
    
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