//... https://graphql.org/graphql-js/running-an-express-graphql-server/

const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const model = require('./model/CourseModel');
const schema = require('./schema/CourseSchema');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: model,
  graphiql: true,
}));

app.listen(4000);

console.log('>>>', 'http://localhost:4000/graphql');