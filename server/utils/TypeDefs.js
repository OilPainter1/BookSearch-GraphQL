import { ApolloServer } from "@apollo/server";

const typeDefs = `
type bookSchema {
    _id: ID
    authors: [{String}]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
}
type User {
    _id: ID
    username: String!
    email: String!
    password: String!
}

type Query {
    getUser: User
}

`
export default typeDefs