import {ApolloError} from '@apollo/client';
import {TFunction} from 'i18next';
import {useTranslation} from 'react-i18next';

import {Language, TranslatableFragment} from '../generated/graphql';

export const useTranslate = () => {
    const {i18n} = useTranslation();

    // NOTE: semi-ugly hack to always generate a translation
    const translate = (translatable: TranslatableFragment) => translatable[i18n.language.slice(0, 2)] || translatable.en || translatable.nl;

    return translate;
};

export const translateError = (t: TFunction, error: ApolloError) => {
    if (error.graphQLErrors.length === 0) {
        return error.networkError ? error.networkError.message : error.message;
    }
    return t(`errors:${error.graphQLErrors[0].message.replace('errors.', '')}`, error.graphQLErrors[0].message);
};

export const CURRENCY_FORMAT = new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR'
});
export const formatCurrency = (amount: number) => CURRENCY_FORMAT.format(amount / 100);

export const languageNames = {
    en: 'English',
    nl: 'Nederlands'
};

export const languageFlags = {
    en: 'gb',
    nl: 'nl'
};

export const languageOptions = Object.values(Language).map((language) => ({
    key: language,
    value: language,
    text: languageNames[language.toLowerCase()],
    flag: languageFlags[language.toLowerCase()]
}));
