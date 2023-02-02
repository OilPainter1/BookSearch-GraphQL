import { ApolloServer } from 'apollo-server-express';
import {expressMiddleware} from '@apollo/server/express4'
import typeDefs from './utils/TypeDefs';
import resolvers from './utils/resolvers';
const server = new ApolloServer({
  typeDefs,
  resolvers
})
const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

db.once('open', async () => {
  await server.start()
  app.use(expressMiddleware(server))
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
