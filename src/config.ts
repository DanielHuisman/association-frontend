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

export const config = {
    apiUrl: process.env.NODE_ENV === 'production' ? apiUrls.find((url) => url.includes(hostname)) : process.env.API_URL,
    apiSubscriptionUrl: process.env.NODE_ENV === 'production' ? apiSubscriptionUrls.find((url) => url.includes(hostname)) : process.env.API_SUBSCRIPTION_URL,

    recaptcha: {
        // TODO: handle configuration
        siteKey: '6LdKnoUUAAAAANQXGtCk3feZk-9vVlFrPpu07HqY'
    }
};
