import { gql } from "@apollo/client";



const GET_USER = gql `

query getUser{
    User{
        _id
    }
}

`;


export default GET_USER