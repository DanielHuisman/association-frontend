import React from 'react';
import {useTranslation} from 'react-i18next';
import {Field, FormikConfig} from 'formik';
import * as Yup from 'yup';

import {Form, FieldInput, SubmitButton} from '../../../components/form';

export interface IValues {
    email: string;
}

export interface RequestResetPasswordFormProps {
    onSubmit: FormikConfig<IValues>['onSubmit'];
}

const schema = Yup.object().shape({
    email: Yup.string()
        .required('This field is required.')
        .email('Invalid email address.')
});

export const RequestResetPasswordForm = ({onSubmit}) => {
    const {t} = useTranslation();

    return (
        <Form<IValues>
            initialValues={{
                email: ''
            }}
            validationSchema={schema}
            onSubmit={onSubmit}
        >
            <Field component={FieldInput} name="email" type="text" label={t('auth:requestResetPassword.email', 'Email address')} />

            <SubmitButton color="pink">
                {t('auth:requestResetPassword.request', 'Send password reset link')}
            </SubmitButton>
        </Form>
    );
};
