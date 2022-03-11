import React from 'react';
import {Formik, FormikConfig, FormikValues} from 'formik';
import {Form as SUForm, FormProps as SUFormProps} from 'semantic-ui-react';

export interface FormProps<Values> extends FormikConfig<Values> {
    initialValues: Values;
    children: any;
    formProps?: SUFormProps;
}

export const Form = <Values extends any = FormikValues>({children, formProps, ...props}: FormProps<Values>): ReturnType<React.FC> => (
    <Formik<Values> {...props}>
        {({isSubmitting, handleSubmit, handleReset}) => (
            <SUForm loading={isSubmitting} onSubmit={handleSubmit} onReset={handleReset} {...formProps}>
                {children}
            </SUForm>
        )}
    </Formik>
);
