import React from 'react';
import {useTranslation} from 'react-i18next';
import {Link, RouteComponentProps} from 'react-router-dom';
import {Header, Button} from 'semantic-ui-react';

import SmallContainer from '../../../components/container/SmallContainer';
import {MutationFormPage} from '../../../components/page';
import {ResetPasswordMutation} from '../../../generated/graphql';
import ResetPasswordDocument from '../../../mutations/ResetPassword.graphql';

import ResetPasswordForm, {IValues} from './ResetPasswordForm';

interface IRouteParams {
    token: string;
}

const ResetPassword = ({match}: RouteComponentProps<IRouteParams>) => {
    const {t} = useTranslation();

    const token = match.params.token;

    return (
        <SmallContainer>
            <Header size="huge">{t('auth:resetPassword.header', 'Reset password')}</Header>

            <MutationFormPage<ResetPasswordMutation, IValues>
                mutation={ResetPasswordDocument}

                data={(values) => ({
                    variables: values
                })}

                success={t('auth:resetPassword.success', 'Successfully changed your password. You can sign in to your account now.')}
                failure={t('auth:resetPassword.failure', 'Failed to reset your password.')}
            >
                {(handleSubmit, {loading, data}) => (
                    <>
                        {!loading && !data && <ResetPasswordForm token={token} onSubmit={handleSubmit} />}

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

export default ResetPassword;
