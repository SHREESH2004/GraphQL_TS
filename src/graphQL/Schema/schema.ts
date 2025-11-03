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
  password:String!
  createdAt:String!
  updatedAt:String!
}


type Query{
  hello: String
  hello2: String
}
`;
