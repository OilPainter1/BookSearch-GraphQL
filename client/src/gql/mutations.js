import { gql } from "@apollo/client";

const CREATE_USER = gql`
mutation createUser($username:String!,$email:String!, $password:String!){
    createUser(username:$username,email:$email,password:$password){
        _id
        email
    }
}





`

export default CREATE_USER