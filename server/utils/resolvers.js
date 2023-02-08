const {User} = require('../models')


const resolvers={
    Query:{
        getUser: async () =>{
            return await User.find({})
        }
    },
    Mutation: {
        createUser: async(parent,{username,email,password})=>{
           return await User.create({username,email,password})
        }
    }
}

module.exports = resolvers