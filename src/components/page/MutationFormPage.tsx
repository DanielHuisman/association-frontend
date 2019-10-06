import React from 'react';
import {MutationFunction, MutationResult, MutationOptions} from 'react-apollo';
import {FormikConfig} from 'formik';

import {MutationPage, IMutationPageProps} from './MutationPage';

interface IProps<MutationType, IValues> extends Omit<IMutationPageProps<MutationType>, 'children'> {
    data: (values: IValues) => MutationOptions<MutationType>;
    children: (
        handleSubmit: FormikConfig<IValues>['onSubmit'],
        mutationResult: MutationResult<MutationType>,
        mutateFn: MutationFunction<MutationType>
    ) => JSX.Element | null;
}

export {
    IProps as IMutationFormPageProps
};

export const MutationFormPage = <MutationType, IValues> ({data, children, ...props}: IProps<MutationType, IValues>) => {
    return (
        <MutationPage<MutationType> {...props}>
            {(mutateFn, mutationResult) => {
                const handleSubmit: FormikConfig<IValues>['onSubmit'] = async (values, actions) => {
                    try {
                        await mutateFn(data(values));
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
