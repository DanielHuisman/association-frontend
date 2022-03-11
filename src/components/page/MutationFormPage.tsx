import React from 'react';
import {MutationFunction, MutationResult, MutationHookOptions} from '@apollo/react-hooks';
import {FormikConfig} from 'formik';

import {MutationPage, MutationPageProps} from './MutationPage';

export interface MutationFormPageProps<MutationType, IValues> extends Omit<MutationPageProps<MutationType>, 'children'> {
    data: (values: IValues) => MutationHookOptions<MutationType>;
    children: (
        handleSubmit: FormikConfig<IValues>['onSubmit'],
        mutationResult: MutationResult<MutationType>,
        mutateFn: MutationFunction<MutationType>
    ) => JSX.Element | null;
}

export const MutationFormPage = <MutationType, IValues> ({
    data, children, ...props
}: MutationFormPageProps<MutationType, IValues>): ReturnType<React.FC> => {
    return (
        <MutationPage<MutationType> {...props}>
            {(mutateFn, mutationResult) => {
                const handleSubmit: FormikConfig<IValues>['onSubmit'] = async (values, actions) => {
                    try {
                        await mutateFn(data(values));

                        actions.resetForm();
                    } catch (err) {
                        // Error is handled in rendering
                    }

                    actions.setSubmitting(false);
                };

                return children(handleSubmit, mutationResult, mutateFn);
            }}
        </MutationPage>
    );
};
