const apiUrls = [
    'https://mandate.exaltio.nl/api/v1/graphql'
];

const apiSubscriptionUrls = [
    'wss://mandate.exaltio.nl/api/v1/graphql'
];

const hostname = window.location.hostname;

export default {
    apiUrl: process.env.NODE_ENV === 'production' ? apiUrls.find((url) => url.includes(hostname)) : 'http://localhost:5000/graphql',
    apiSubscriptionUrl: process.env.NODE_ENV === 'production' ? apiSubscriptionUrls.find((url) => url.includes(hostname)) : 'ws://localhost:5000/graphql'
};
