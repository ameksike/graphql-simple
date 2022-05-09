//... https://graphql.org/graphql-js/running-an-express-graphql-server/

const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const controller = require('./controller/CourseController');
const schema = require('./model/schema/CourseSchema');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: controller,
  graphiql: true,
}));

app.listen(4000);

console.log('>>>', 'http://localhost:4000/graphql');