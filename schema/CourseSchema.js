const { buildSchema } = require('graphql');

const CourseSchema = buildSchema(`
	input CourseInput {
        title: String
        author: String
        description: String
        topic: String
        url: String
	},
    type Course {
        id: Int
        title: String
        author: String
        description: String
        topic: String
        url: String
    },
    type Query {
        select(id: Int!): Course
        list(topic: String): [Course]
    },
    type Mutation {
        update(id: Int!, topic: String!): Course,
        create(payload: CourseInput!): Course,
        delete(id: Int!): Course
    }
`);

module.exports = CourseSchema;