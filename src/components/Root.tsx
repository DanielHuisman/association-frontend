import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {ApolloProvider} from '@apollo/react-hooks';

import {client} from '../graphql';

import {App} from './app/App';

export const Root = () => {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ApolloProvider>
    );
};
