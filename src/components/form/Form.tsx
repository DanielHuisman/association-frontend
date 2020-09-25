import React from 'react';
import {Formik, FormikConfig, FormikValues} from 'formik';
import {Form as SUForm, FormProps} from 'semantic-ui-react';

interface IProps<Values> extends FormikConfig<Values> {
    initialValues: Values;
    children: any;
    formProps?: FormProps;
}

const Form = <Values extends any = FormikValues>({children, formProps, ...props}: IProps<Values>) => (
    <Formik<Values> {...props}>
        {({isSubmitting, handleSubmit, handleReset}) => (
            <SUForm loading={isSubmitting} onSubmit={handleSubmit} onReset={handleReset} {...formProps}>
                {children}
            </SUForm>
        )}
    </Formik>
);

export default Form;
