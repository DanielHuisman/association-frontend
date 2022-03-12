import React from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {Container, Header} from 'semantic-ui-react';
import omit from 'lodash.omit';

import {MutationFormPage} from '../../../components/page/MutationFormPage';
import {Text} from '../../../components/text/Text';
import {Spoiler} from '../../../components/util/Spoiler';
import {RegisterMutation} from '../../../generated/graphql';
import RegisterQL from '../../../mutations/Register.graphql';

import {RegisterForm, IValues} from './RegisterForm';
import {gql} from '@apollo/react-hooks';

export const Register: React.FC = () => {
    const {t} = useTranslation();

    return (
        <Container>
            <Helmet title={t('auth:register.header', 'Become a member')} />
            <Header size="large">{t('auth:register.header', 'Become a member')}</Header>

            <Text name="join" />

            <MutationFormPage<RegisterMutation, IValues>
                mutation={gql(RegisterQL)}

                data={(values) => ({
                    variables: {
                        data: omit(values, ['termsAndConditions'])
                    }
                })}

                success={t('auth:register.success', 'Successfully registered an account.')}
                failure={t('auth:register.failure', 'Failed to register an account.')}
            >
                {(handleSubmit, {loading}) => (
                    <Spoiler open={!loading}>
                        <RegisterForm onSubmit={handleSubmit} />
                    </Spoiler>
                )}
            </MutationFormPage>
        </Container>
    );
};
