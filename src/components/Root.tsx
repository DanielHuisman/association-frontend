import React from 'react';
import {ApolloProvider} from 'react-apollo';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import {client} from '../graphql';

import App from './app/App';

// Initialize history
const history = createBrowserHistory();

const Root = () => {
    return (
        <ApolloProvider client={client}>
            <Router history={history}>
                <App />
            </Router>
        </ApolloProvider>
    );
};

export default Root;
