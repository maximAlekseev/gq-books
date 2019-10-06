const expess = require('express');
const graphqlHTTP = require('express-graphql');

const schema = require('./schema/schema');
const app = expess();

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

app.listen(3000, () => {
  console.log('LISTENING ON 3000');
});
