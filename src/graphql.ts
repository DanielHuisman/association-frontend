import {ApolloClient} from 'apollo-client';
import {setContext} from 'apollo-link-context';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {createUploadLink} from 'apollo-upload-client';

import config from './config';

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

// Initialize Apollo client
export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(uploadLink)
});
