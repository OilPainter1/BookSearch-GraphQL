const {User} = require('../models')


const resolvers={
    Query:{
        getUser: async () =>{
            return await User.findOne()
        }
    }
}

export default resolvers