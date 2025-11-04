export const schema = `#graphql


type User{
  id:ID!
  name:String!
  email:String!
  role:String!
  avatar:String!
  verified:Boolean!
  googleId:String
  password:String
  facebookId:String!
  createdAt:String!
  updatedAt:String!
}


type Query{
  users: [User]
}
`;
