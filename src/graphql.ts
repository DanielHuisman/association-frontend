import {ApolloClient} from '@apollo/client';
import {InMemoryCache} from '@apollo/client/cache';
import {setContext} from '@apollo/client/link/context';
import {createUploadLink} from 'apollo-upload-client';

import config from './config';
import {possibleTypes} from './generated/fragmentTypes.json';

// Initialize HTTP / upload link
const uploadLink = createUploadLink({
    uri: config.apiUrl
});

// Initialize authentication link
const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        }
    };
});

// Initialize cache
const cache = new InMemoryCache({
    possibleTypes
});

// Initialize Apollo client
export const client = new ApolloClient({
    cache,
    link: authLink.concat(uploadLink)
});
