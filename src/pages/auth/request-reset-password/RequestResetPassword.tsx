import React from 'react';
import {useTranslation} from 'react-i18next';
import {Header} from 'semantic-ui-react';

import SmallContainer from '../../../components/container/SmallContainer';
import {MutationFormPage} from '../../../components/page';
import {RequestResetPasswordMutation} from '../../../generated/graphql';
import RequestResetPasswordDocument from '../../../mutations/RequestResetPassword.graphql';

import RequestResetPasswordForm, {IValues} from './RequestResetPasswordForm';

const RequestResetPassword = () => {
    const {t} = useTranslation();

    return (
        <SmallContainer>
            <Header size="huge">{t('auth:requestResetPassword.header', 'Request password reset')}</Header>

            <MutationFormPage<RequestResetPasswordMutation, IValues>
                mutation={RequestResetPasswordDocument}

                data={(values) => ({
                    variables: values
                })}

                success={t('auth:requestResetPassword.success', 'A password reset link has been send to your email address.')}
                failure={t('auth:requestResetPassword.failure', 'Failed to request a password reset.')}
            >
                {(handleSubmit, {loading, data}) => (
                    <>
                        {!loading && !data && <RequestResetPasswordForm onSubmit={handleSubmit} />}
                    </>
                )}
            </MutationFormPage>
        </SmallContainer>
    );
};

export default RequestResetPassword;
