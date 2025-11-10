export const schema = `#graphql

type User {
  id: ID!
  name: String!
  user:  User!
  email: String!
  role: String!
  avatar: String!
  verified: Boolean!
  googleId: String
  facebookId: String
  password: String
  createdAt: String!
  updatedAt: String!
  lectures:Lecture!
}

type Course {
  id: ID!
  instructor: User!
  title: String!
  description: String!
  duration: String!
  price: Float!
  lectures: [Lecture]
  createdAt: String!
  updatedAt: String!
}

type Lecture {
  id: ID!
  title: String!
  description: String
  video: VideoResolutions
  section: String!
  duration: Int
  course: Course!
  createdAt: String!
  updatedAt: String!
}

type VideoResolutions {
  p480: String!
  p720: String!
  p1080: String!
}

type Query {
  users: [User!]!
  courses: [Course!]!
  course(id: ID!): Course
  lectures: [Lecture!]!
  lecture(id: ID!): Lecture
}

`;
