import React from 'react';
import {QueryResult, MutationFunction, MutationResult, MutationHookOptions} from '@apollo/react-hooks';
import {FormikConfig} from 'formik';

import {Page, PageProps} from './Page';

export interface FormPageProps<QueryType, MutationType, IValues> extends Omit<PageProps<QueryType, MutationType>, 'children'> {
    data: (values: IValues, queryResult: QueryResult<QueryType>) => MutationHookOptions<MutationType>;
    children: (
        handleSubmit: FormikConfig<IValues>['onSubmit'],
        queryResult: QueryResult<QueryType>,
        mutationResult: MutationResult<MutationType>,
        mutateFn: MutationFunction<MutationType>
    ) => JSX.Element | null;
}

export const FormPage = <QueryType, MutationType, IValues>({
    data, children, ...props
}: FormPageProps<QueryType, MutationType, IValues>): ReturnType<React.FC> => {
    return (
        <Page<QueryType, MutationType> {...props}>
            {(queryResult, mutateFn, mutationResult) => {
                const handleSubmit: FormikConfig<IValues>['onSubmit'] = async (values, actions) => {
                    try {
                        await mutateFn(data(values, queryResult));
                    } catch (err) {
                        // Error is handled in rendering
                    }

                    actions.setSubmitting(false);
                };

                return children(handleSubmit, queryResult, mutationResult, mutateFn);
            }}
        </Page>
    );
};
