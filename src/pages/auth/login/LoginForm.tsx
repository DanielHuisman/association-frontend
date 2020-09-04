import React from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import {Field, FormikConfig} from 'formik';
import * as Yup from 'yup';
import {List, Button, Icon} from 'semantic-ui-react';

import {Form, FieldInput, SubmitButton} from '../../../components/form';

export interface IValues {
    email: string;
    password: string;
}

interface IProps {
    onSubmit: FormikConfig<IValues>['onSubmit'];
}

const schema = Yup.object().shape({
    email: Yup.string()
        .required('This field is required.')
        .email('Invalid email address.'),
    password: Yup.string()
        .required('This field is required.')
});

const LoginForm = ({onSubmit}: IProps) => {
    const {t} = useTranslation();

    return (
        <Form<IValues>
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={schema}
            onSubmit={onSubmit}
            formProps={{size: 'large'}}
        >
            <Field component={FieldInput} name="email" type="text" label={t('auth:login.field.email', 'Email address')} autoComplete="username" autoFocus />
            <Field component={FieldInput} name="password" type="password" label={t('auth:login.field.password', 'Password')} autoComplete="password" />

            <SubmitButton size="large" color="pink">
                {t('auth:login.button.login', 'Sign in')}
            </SubmitButton>

            <List>
                <List.Item><Link to="/request/reset">{t('auth:login.button.forgetPassword', 'Forgot your password?')}</Link></List.Item>
                <List.Item><Link to="/request/verify">{t('auth:login.button.noVerificationEmail', 'No verification email?')}</Link></List.Item>
            </List>
        </Form>
    );
};

export default LoginForm;
