

const {ApolloServer} = require('@apollo/server')


const typeDefs = `
type bookSchema {
    _id: ID
  
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
type Mutation {
    createUser(username:String!,email:String!,password:String!):User
}

`
module.exports= typeDefs