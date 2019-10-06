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

export const useSimpleQueryParams = (options?: IUpdateStateOptions) => useQueryParams((value) => value, (value) => value, {
    push: true,
    ...options
});
