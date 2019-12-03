import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './data/schema';
import { resolvers } from './data/resolvers';

const app = express();
const server = new ApolloServer({typeDefs, resolvers});

server.applyMiddleware({app});

app.set('port', 4000);

// app.get('/', (req, res) => {
//     res.send('Todo listo');
// });

app.listen(app.get('port') ,() => console.log(`server runnin' in http://localhost:${app.get('port')}`));