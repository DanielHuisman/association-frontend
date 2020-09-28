import React from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {Container, Header} from 'semantic-ui-react';
import omit from 'lodash.omit';

import {MutationFormPage} from '../../../components/page/MutationFormPage';
import Text from '../../../components/text/Text';
import {RegisterMutation} from '../../../generated/graphql';
import Register from '../../../mutations/Register.graphql';

import RegisterForm, {IValues} from './RegisterForm';

const Information = () => {
    const {t} = useTranslation();

    return (
        <Container>
            <Helmet title={t('auth:register.header', 'Become a member')} />
            <Header size="large">{t('auth:register.header', 'Become a member')}</Header>

            <Text name="join" />

            <MutationFormPage<RegisterMutation, IValues>
                mutation={Register}

                data={(values) => ({
                    variables: {
                        data: omit(values, ['termsAndConditions'])
                    }
                })}

                success={t('auth:register.success', 'Successfully changed your profile.')}
                failure={t('auth:register.failure', 'Failed to change your profile.')}
            >
                {(handleSubmit, {loading}) => (
                    <>
                        {!loading && <RegisterForm onSubmit={handleSubmit} />}
                    </>
                )}
            </MutationFormPage>
        </Container>
    );
};

export default Information;
