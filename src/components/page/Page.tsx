import React from 'react';
import {useQuery, QueryResult, QueryHookOptions, MutationFunction, MutationResult} from '@apollo/react-hooks';
import {Loader, Message} from 'semantic-ui-react';

import {MutationPage, MutationPageProps} from './MutationPage';

export interface PageProps<QueryType, MutationType> extends Omit<MutationPageProps<MutationType>, 'children'> {
    query: QueryHookOptions['query'];
    queryVariables?: QueryHookOptions['variables'];
    queryProps?: Partial<QueryHookOptions>;
    children: (
        queryResult: QueryResult<QueryType>,
        mutateFn: MutationFunction<MutationType>,
        mutationResult: MutationResult<MutationType>,
        ...args: unknown[]
    ) => JSX.Element | null;
}

export const Page = <QueryType, MutationType = unknown>({
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
}: PageProps<QueryType, MutationType>): ReturnType<React.FC> => {
    const queryResult = useQuery<QueryType>(query, {
        variables: queryVariables,
        ...queryProps
    });

    if (defaultBehaviour) {
        if (loader && queryResult.loading) {
            return <Loader active />;
        }

        if (queryResult.error) {
            return (
                <Message error>
                    {queryResult.error.networkError ?
                        queryResult.error.networkError.message : queryResult.error.graphQLErrors.map((error) => error.message).join(', ')}
                </Message>
            );
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
};
