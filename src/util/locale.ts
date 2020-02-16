import {ApolloError} from 'apollo-client';
import {TFunction} from 'i18next';

export const translateError = (t: TFunction, error: ApolloError) => {
    if (error.graphQLErrors.length === 0) {
        return error.networkError ? error.networkError.message : error.message;
    }
    return t(`errors:${error.graphQLErrors[0].message.replace('errors.', '')}`, error.graphQLErrors[0].message);
};
