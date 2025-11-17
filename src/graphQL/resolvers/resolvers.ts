import {
    getAllCourses,
    getAllLectures,
    getCoursesById,
    getAllUser,
    getLecturesById,
    createUser,
    getUserById,
    getLecturesByCourseId
} from "../../controller/main.controller.js"


interface CreateUserInput {
    name: string;
    email: string;
    role: string;
    avatar: string;
    password: string;
}

export const GraphQLResolvers = {
    Query: {
        users: async () => await getAllUser(),
        courses: async () => await getAllCourses(),
        course: async (_: any, { id }: { id: string }) => await getCoursesById(id),
        lectures: async () => await getAllLectures(),
        lecture: async (_: any, { id }: { id: string }) => await getLecturesById(id),
    },

    Mutation: {
        createUser: async (_: any, { input }: { input: CreateUserInput }) => await createUser(input),
    },

    User: {
        id: (parent: any) => parent._id || parent.id,
        course: async (parent: any) => await getCoursesById(parent.course),
    },

    Course: {
        id: (parent: any) => parent._id || parent.id,
        instructor: async (parent: any) => await getUserById(parent.instructor),
        lectures: async (parent: any) => await getLecturesByCourseId(parent.id),
    },

    Lecture: {
        id: (parent: any) => parent._id || parent.id,
        course: async (parent: any) => await getCoursesById(parent.course),
        video: (parent: any) => parent.video || null,
    },
};