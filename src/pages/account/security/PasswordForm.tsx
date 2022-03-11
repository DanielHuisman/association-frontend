import React from 'react';
import {useTranslation} from 'react-i18next';
import {Field, FormikConfig} from 'formik';
import * as Yup from 'yup';

import {Form, FieldInput, SubmitButton} from '../../../components/form';

export interface IValues {
    password: string;
    passwordRepeat: string;
}

export interface PasswordFormProps {
    onSubmit: FormikConfig<IValues>['onSubmit'];
}

const schema = Yup.object().shape({
    password: Yup.string()
        .required('This field is required.')
        .min(8, 'Minimum length is 8 characters.'),
    passwordRepeat: Yup.string()
        .required('This field is required.')
        .min(8, 'Minimum length is 8 characters.')
        .oneOf([Yup.ref('password'), null], 'Passwords do not match.')
});

export const PasswordForm: React.FC<PasswordFormProps> = ({onSubmit}) => {
    const {t} = useTranslation();

    return (
        <Form<IValues>
            initialValues={{
                password: '',
                passwordRepeat: ''
            }}
            validationSchema={schema}
            onSubmit={onSubmit}
        >
            <Field
                component={FieldInput}
                name="password"
                type="password"
                label={t('account:security.password.password', 'Password')}
                autoComplete="new-password"
            />
            <Field
                component={FieldInput}
                name="passwordRepeat"
                type="password"
                label={t('account:security.password.passwordRepeat', 'Repeat password')}
                autoComplete="new-password"
            />

            <SubmitButton color="blue">
                {t('account:security.password.change', 'Change password')}
            </SubmitButton>
        </Form>
    );
};
