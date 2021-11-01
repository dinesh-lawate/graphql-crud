const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        getFriends: [Friend]
        getFriendById(id: ID!):Friend
    }

    type Mutation {
        createFriend(friend: InputFriend!):Friend
        updateFriend(id: ID!, friend: InputFriend!): Friend
        deleteFriend(id: ID!): Friend
    }

    type Friend {
        id:ID!
        firstName:String
        lastName:String
        gender:String
        email:String
        age:Int
        friends:[Friend]
    }

    input InputFriend {
        firstName:String
        lastName:String
        gender:String
        email:String
        age:Int
    }
`);

module.exports = { schema };