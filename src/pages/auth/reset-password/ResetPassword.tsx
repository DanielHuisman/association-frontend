import {gql} from '@apollo/react-hooks';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {useParams, Link} from 'react-router-dom';
import {Header, Button} from 'semantic-ui-react';

import {SmallContainer} from '../../../components/container/SmallContainer';
import {MutationFormPage} from '../../../components/page';
import {ResetPasswordMutation} from '../../../generated/graphql';
import ResetPasswordQL from '../../../mutations/ResetPassword.graphql';

import {ResetPasswordForm, IValues} from './ResetPasswordForm';

type Params = {
    token: string;
};

export const ResetPassword: React.FC = () => {
    const params = useParams<Params>();
    const {t} = useTranslation();

    return (
        <SmallContainer>
            <Header size="huge">{t('auth:resetPassword.header', 'Reset password')}</Header>

            <MutationFormPage<ResetPasswordMutation, IValues>
                mutation={gql(ResetPasswordQL)}

                data={(values) => ({
                    variables: values
                })}

                success={t('auth:resetPassword.success', 'Successfully changed your password. You can sign in to your account now.')}
                failure={t('auth:resetPassword.failure', 'Failed to reset your password.')}
            >
                {(handleSubmit, {loading, data}) => (
                    <>
                        {!loading && !data && <ResetPasswordForm token={params.token} onSubmit={handleSubmit} />}

                        {!loading && data && (
                            <Button as={Link} to="/login" color="pink">
                                {t('auth:resetPassword.toSignIn', 'Go to sign in')}
                            </Button>
                        )}
                    </>
                )}
            </MutationFormPage>
        </SmallContainer>
    );
};
