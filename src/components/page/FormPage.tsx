import React from 'react';
import {QueryResult, MutationFunction, MutationResult, MutationHookOptions} from '@apollo/react-hooks';
import {FormikConfig} from 'formik';

import {Page, IPageProps} from './Page';

interface IProps<QueryType, MutationType, IValues> extends Omit<IPageProps<QueryType, MutationType>, 'children'> {
    data: (values: IValues, queryResult: QueryResult<QueryType>) => MutationHookOptions<MutationType>;
    children: (
        handleSubmit: FormikConfig<IValues>['onSubmit'],
        queryResult: QueryResult<QueryType>,
        mutationResult: MutationResult<MutationType>,
        mutateFn: MutationFunction<MutationType>
    ) => JSX.Element | null;
}

export {
    IProps as IFormPageProps
};

export const FormPage = <QueryType, MutationType, IValues> ({data, children, ...props}: IProps<QueryType, MutationType, IValues>) => {
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
