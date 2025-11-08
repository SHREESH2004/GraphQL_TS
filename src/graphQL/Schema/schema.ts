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

type Course{
  id:ID!
  title:String!
  description:String!
  instructor:String!
  duration:String!
  price:Float!
  createdAt:String!
  updatedAt:String!
}

type Query{
  users: [User]
  courses: [Course],
  course(id:ID!):[Course],
}
`;
