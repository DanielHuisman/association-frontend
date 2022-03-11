import React from 'react';
import {Helmet} from 'react-helmet';
import {useNavigate, Navigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {useMutation} from '@apollo/react-hooks';
import {Header, Message} from 'semantic-ui-react';
import {FormikHelpers} from 'formik';

import {SmallContainer} from '../../../components/container/SmallContainer';
import {LoginMutation, LoginMutationVariables} from '../../../generated/graphql';
import LoginQL from '../../../mutations/Login.graphql';
import {translateError} from '../../../util';

import {LoginForm, IValues} from './LoginForm';
import styles from './Login.css';

export const Login: React.FC = () => {
    const navigate = useNavigate();
    const {t} = useTranslation();

    const [login, {loading, data, error, client}] = useMutation<LoginMutation, LoginMutationVariables>(LoginQL);

    const handleSubmit = async (values: IValues, helpers: FormikHelpers<IValues>) => {
        try {
            const result = await login({
                variables: values
            });

            if (!result) {
                throw new Error('Empty response');
            }

            // Store authentication token
            localStorage.setItem('token', result.data.login.accessToken);

            // Reset Apollo store
            await client.resetStore();

            // Redirect to index
            navigate('/');
        } catch (err) {
            // Stop submitting to display the error
            helpers.setSubmitting(false);
        }
    };

    return (
        <SmallContainer>
            <Helmet title={t('auth:login.header', 'Sign in')} />
            <Header size="huge">{t('auth:login.header', 'Sign in')}</Header>

            {!loading && !error && data && <Navigate to="/" />}

            <p className={styles.text}>{t('auth:login.text', 'Sign in with your Exaltio account:')}</p>

            {error && (
                <Message error>
                    <Message.Header>{t('auth:login.error', 'Failed to sign in')}</Message.Header>
                    {translateError(t, error)}
                </Message>
            )}
            <LoginForm onSubmit={handleSubmit} />
        </SmallContainer>
    );
};
