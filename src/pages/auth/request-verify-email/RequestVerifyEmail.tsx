import React from 'react';
import {useTranslation} from 'react-i18next';
import {Header} from 'semantic-ui-react';

import SmallContainer from '../../../components/container/SmallContainer';
import {MutationFormPage} from '../../../components/page';
import {RequestVerifyEmailMutation} from '../../../generated/graphql';
import RequestVerifyEmailDocument from '../../../mutations/RequestVerifyEmail.graphql';

import RequestVerifyEmailForm, {IValues} from './RequestVerifyEmailForm';

const RequestVerifyEmail = () => {
    const {t} = useTranslation();

    return (
        <SmallContainer>
            <Header size="huge">{t('auth:requestVerifyEmail.header', 'Resend verification email')}</Header>

            <MutationFormPage<RequestVerifyEmailMutation, IValues>
                mutation={RequestVerifyEmailDocument}

                data={(values) => ({
                    variables: values
                })}

                success={t('auth:requestVerifyEmail.success', 'A email verification link has been send to your email address.')}
                failure={t('auth:requestVerifyEmail.failure', 'Failed to resend the verfication email.')}
            >
                {(handleSubmit, {loading, data}) => (
                    <>
                        {!loading && !data && <RequestVerifyEmailForm onSubmit={handleSubmit} />}
                    </>
                )}
            </MutationFormPage>
        </SmallContainer>
    );
};

export default RequestVerifyEmail;
