import e from "express";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { start } from "repl";

const client=new ApolloServer({
    typeDefs:'type Query { hello: String ,hello2: String }',
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