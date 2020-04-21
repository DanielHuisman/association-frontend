const apiUrls = [
    'https://mandate.exaltio.nl/api/graphql'
];

const apiSubscriptionUrls = [
    'wss://mandate.exaltio.nl/api/graphql'
];

const hostname = window.location.hostname;

export default {
    apiUrl: process.env.NODE_ENV === 'production' ? apiUrls.find((url) => url.includes(hostname)) : 'http://localhost:5003/graphql',
    apiSubscriptionUrl: process.env.NODE_ENV === 'production' ? apiSubscriptionUrls.find((url) => url.includes(hostname)) : 'ws://localhost:5003/graphql'
};
