import {ApolloClient} from 'apollo-client';
import {setContext} from 'apollo-link-context';
import {InMemoryCache, IntrospectionFragmentMatcher} from 'apollo-cache-inmemory';
import {createUploadLink} from 'apollo-upload-client';

import config from './config';
import fragmentTypes from './generated/fragmentTypes.json';

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
    fragmentMatcher: new IntrospectionFragmentMatcher({
        introspectionQueryResultData: fragmentTypes
    })
});

// Initialize Apollo client
export const client = new ApolloClient({
    cache,
    link: authLink.concat(uploadLink)
});
