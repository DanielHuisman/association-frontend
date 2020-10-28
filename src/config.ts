const apiUrls = [
    'https://exaltio.nl/api/graphql',
    'https://www.exaltio.nl/api/graphql',
    'https://exaltio.utwente.nl/api/graphql',
    'https://www.exaltio.utwente.nl/api/graphql'
];

const apiSubscriptionUrls = [
    'wss://exaltio.nl/api/graphql',
    'wss://www.exaltio.nl/api/graphql',
    'wss://exaltio.utwente.nl/api/graphql',
    'wss://www.exaltio.utwente.nl/api/graphql'
];

const hostname = window.location.hostname;

export default {
    apiUrl: process.env.NODE_ENV === 'production' ? apiUrls.find((url) => url.includes(hostname)) : 'http://localhost:5003/graphql',
    apiSubscriptionUrl: process.env.NODE_ENV === 'production' ? apiSubscriptionUrls.find((url) => url.includes(hostname)) : 'ws://localhost:5003/graphql',

    recaptcha: {
        // TODO: handle configuration
        siteKey: '6LdKnoUUAAAAANQXGtCk3feZk-9vVlFrPpu07HqY'
    }
};
