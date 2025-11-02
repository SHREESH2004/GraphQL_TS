import e from "express";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { schema } from "./graphQL/Schema/schema.js";

const client=new ApolloServer({
    typeDefs:schema,
    resolvers:{
        Query:{
            hello:()=> 'Hello world!',
            hello2:()=> 'Hello world 2!',
        },
    },
});

startStandaloneServer(client,{
    listen:{port:4000}
}).then(({url})=>{
    console.log(`Server ready at ${url}`);
});