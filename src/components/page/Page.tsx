import React from 'react';
import {Query, QueryComponentOptions, QueryResult, MutationFunction, MutationResult} from 'react-apollo';
import {Loader} from 'semantic-ui-react';

import {MutationPage, IMutationPageProps} from './MutationPage';

interface IProps<QueryType, MutationType> extends Omit<IMutationPageProps<MutationType>, 'children'> {
    query: QueryComponentOptions['query'];
    queryVariables?: QueryComponentOptions['variables'];
    queryProps?: Partial<QueryComponentOptions>;
    children: (
        queryResult: QueryResult<QueryType>,
        mutateFn: MutationFunction<MutationType>,
        mutationResult: MutationResult<MutationType>,
        ...args: any[]
    ) => JSX.Element | null;
}

export {
    IProps as IPageProps
};

export const Page = <QueryType, MutationType = any>({
    query,
    queryVariables,
    queryProps,
    mutation,
    mutationVariables,
    mutationProps,
    success,
    failure,
    children,
    defaultBehaviour = true,
    loader = true
}: IProps<QueryType, MutationType>) => (
    <Query<QueryType> query={query} variables={queryVariables} {...queryProps}>
        {(queryResult) => {
            if (defaultBehaviour) {
                if (loader && queryResult.loading) {
                    return <Loader active />;
                }

                if (queryResult.error) {
                    throw queryResult.error;
                }
            }

            if (mutation) {
                return (
                    <MutationPage<MutationType>
                        mutation={mutation}
                        mutationVariables={mutationVariables}
                        mutationProps={mutationProps}
                        success={success}
                        failure={failure}
                        defaultBehaviour={defaultBehaviour}
                        loader={loader}
                    >
                        {(mutateFn: MutationFunction<MutationType>, mutationResult: MutationResult<MutationType>) => {
                            return children(queryResult, mutateFn, mutationResult);
                        }}
                    </MutationPage>
                );
            } else {
                return children(queryResult, null, null);
            }
        }}
    </Query>
);
