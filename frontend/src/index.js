
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import apolloClient  from "apollo-boost"
import { ApolloProvider } from "@apollo/react-hooks"

const client  = new apolloClient({
  uri  : "http://localhost:5000/"
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
