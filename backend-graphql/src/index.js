import { GraphQLServer } from "graphql-yoga"
import { typeDefs } from "./graphql/typeDefs"
import { resolvers } from "./graphql/resolvers"
import mongoose from "mongoose"
mongoose.set('useCreateIndex', true);
import "./config/db"

const server = new GraphQLServer({
    typeDefs,
    resolvers
})


server.start({port: 5000}, ({port}) => console.log('server is running ', port ))