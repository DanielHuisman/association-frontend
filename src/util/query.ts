import qs from 'qs';
import {useQueryParamsFactory} from 'react-router-query-params-hook';

// UpdateStateOptions is not exported from react-router-query-params-hook
interface IUpdateStateOptions {
    keepUrl?: boolean;
    force?: boolean;
    push?: boolean;
}

export const useQueryParams = useQueryParamsFactory(
    (queryString) => qs.parse(queryString, {
        ignoreQueryPrefix: true
    }),
    (params) => qs.stringify(params, {
        addQueryPrefix: true,
        encode: true
    })
);

export const useSimpleQueryParams = (options?: IUpdateStateOptions) => useQueryParams(
    (params) => {
        const simpleParams: {[k: string]: string} = {};

        for (const key of Object.keys(params)) {
            // Ignore multiple values
            const value = Array.isArray(params[key]) ? params[key][0] : params[key];

            // Ignore non-string values
            if (typeof value === 'string') {
                simpleParams[key] = value;
            }
        }

        return simpleParams;
    },
    (value) => value,
    {
        push: true,
        ...options
    }
);
