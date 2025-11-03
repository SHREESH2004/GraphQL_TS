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
    const dbUrl = "mongodb+srv://shreeshsanyal:QBqeJ7Ukd99Qg9IX@zippy.hlp2cgw.mongodb.net/";
    if (!dbUrl) {
      throw new Error("MONGODB_URI is not defined in your .env file");
    }

    await connectDB(dbUrl);
    
    const { url } = await startStandaloneServer(client, {
      listen: { port: 4000 },
    });
    
    console.log(`🚀 Server ready at: ${url}`);

  } catch (error) {
    console.error("Failed to start the server:", error);
    process.exit(1);
  }
}

startServer();