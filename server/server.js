const {ApolloServer}=require('@apollo/server')
const {expressMiddleware} = require('@apollo/server/express4')
const typeDefs = require('./utils/TypeDefs')
const resolvers= require('./utils/resolvers')
const express = require('express');
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  
})
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');

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
