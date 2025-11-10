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
  instructor:User!
  title:String!
  description:String!
  duration:String!
  price:Float!
  createdAt:String!
  updatedAt:String!
}
type Lecture{
  id: ID!
  title: String!
  description: String
  videoUrl: videoUrl!
  duration: Int 
  course: Course! 
  createdAt: String!
  updatedAt: String!
}

type videoUrl{
  480p:String!,
  720p:String!,
  1080p:String!,
}


type Query{
  users: [User]
  courses: [Course],
  course(id: ID!): Course
  Lecture:[Lecture]

}
`;
