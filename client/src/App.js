import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import Header from './../src/components/Header';
import Clients from './../src/components/Clients';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewClient from './../src/components/NewClient';
import EditClient from './../src/components/EditClient';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  onError: ({ networkError, graphQLErrors }) => {
    console.log('networkError', networkError);
    console.log('graphQLErrors', graphQLErrors);
  }
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <React.Fragment>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Clients}/>
              <Route exact path="/cliente/editar/:id" component={EditClient} />
              <Route exact path="/cliente/nuevo" component={NewClient} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </ApolloProvider>
  );
}

export default App;
