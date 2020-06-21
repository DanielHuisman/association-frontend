import React from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {Header, List} from 'semantic-ui-react';

import SmallContainer from '../../../components/container/SmallContainer';
import OAuthButton from '../../../components/oauth/OAuthButton';
import {ProviderType} from '../../../generated/graphql';

import styles from './Login.css';

const SignIn = () => {
    const {t} = useTranslation();

    return (
        <SmallContainer>
            <Helmet title={t('auth:login.header', 'Sign in')} />
            <Header size="huge">{t('auth:login.header', 'Sign in')}</Header>

            <p className={styles.text}>{t('auth:login.text', 'Sign in with your Exaltio Google account:')}</p>

            <List>
                <List.Item>
                    <OAuthButton type={ProviderType.GOOGLE} name="Google" icon="google" size="large" color="blue" fluid />
                </List.Item>
            </List>
        </SmallContainer>
    );
};

export default SignIn;
