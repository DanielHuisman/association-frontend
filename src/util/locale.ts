import {ApolloError} from 'apollo-client';
import i18next from 'i18next';
import React, {useContext} from 'react';

import {TranslatableFragment} from '../types/generatedTypes';

export const LocaleContext = React.createContext<keyof Omit<TranslatableFragment, '__typename'>>('en');

export const useTranslate = () => {
    const locale = useContext(LocaleContext);

    const translate = (translatable: TranslatableFragment) => translatable[locale];

    return translate;
};

export const translateError = (t: i18next.TFunction, error: ApolloError) => {
    if (error.graphQLErrors.length === 0) {
        return error.networkError ? error.networkError.message : error.message;
    }
    return t(`errors:${error.graphQLErrors[0].message.replace('errors.', '')}`, error.graphQLErrors[0].message);
};
