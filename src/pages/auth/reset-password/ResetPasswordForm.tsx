import React from 'react';
import {useTranslation} from 'react-i18next';
import {Field, FormikConfig} from 'formik';
import * as Yup from 'yup';

import {Form, FieldInput, SubmitButton} from '../../../components/form';

export interface IValues {
    token: string;
    password: string;
    passwordRepeat: string;
}

interface IProps {
    token: string;
    onSubmit: FormikConfig<IValues>['onSubmit'];
}

const schema = Yup.object().shape({
    token: Yup.string()
        .required('This field is required.'),
    password: Yup.string()
        .required('This field is required.')
        .min(8, 'Minimum length is 8 characters.'),
    passwordRepeat: Yup.string()
        .required('This field is required.')
        .min(8, 'Minimum length is 8 characters.')
        .oneOf([Yup.ref('password'), null], 'Passwords do not match.')
});

const ResetPasswordForm = ({token, onSubmit}: IProps) => {
    const {t} = useTranslation();

    return (
        <Form<IValues>
            initialValues={{
                token,
                password: '',
                passwordRepeat: ''
            }}
            validationSchema={schema}
            onSubmit={onSubmit}
        >
            <Field component={FieldInput} name="token" type="text" label={t('auth:resetPassword.token', 'Reset token')} readOnly />
            <Field component={FieldInput} name="password" type="password" label={t('auth:resetPassword.password', 'Password')} />
            <Field component={FieldInput} name="passwordRepeat" type="password" label={t('auth:resetPassword.passwordRepeat', 'Repeat password')} />

            <SubmitButton color="pink">
                {t('auth:resetPassword.reset', 'Reset password')}
            </SubmitButton>
        </Form>
    );
};

export default ResetPasswordForm;
