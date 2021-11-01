const express = require('express');
const { graphqlHTTP } = require('express-graphql')
const app = express();
const { schema } = require('./schema');
const { resolver } = require('./resolver');
const db = require('./db');

app.get('/', (req, res) => {
    res.send("Graphql is amazing!");
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true,
    context: {
        db
    }
}));

app.listen(4801, () => {
    console.log("Server started listening on port 8080");
});