import express from 'express';
const app = express();

import mongoose from 'mongoose'
mongoose.connect('mongodb://localhost/graphql-test')
.then( () => console.log('mongodb connected'))
.catch( err => console.log(err))

// Mongodb Models
import Car from './models/Car'

import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import typeDefs from './schema'
import resolvers from './resolvers'

// settings
app.set('port', process.env.PORT || 3000);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

// Routes
app.use('/graphql', express.json(), graphqlExpress({
    schema,
    context: {
        Car
    }
}))

app.use('/graphiql', graphiqlExpress({
    // de donde consulta los datos graphiql?:
    endpointURL: '/graphql'
}))

// Start server
app.listen(app.get('port'), () => {
    console.log("server on port 3000")
})