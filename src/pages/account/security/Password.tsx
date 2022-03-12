import React from 'react';
import {useTranslation} from 'react-i18next';
import {Header} from 'semantic-ui-react';

import {MutationFormPage} from '../../../components/page';
import ChangePassword from '../../../mutations/ChangePassword.graphql';
import {ChangePasswordMutation} from '../../../generated/graphql';

import {PasswordForm, IValues} from './PasswordForm';
import {gql} from '@apollo/react-hooks';

export const Password: React.FC = () => {
    const {t} = useTranslation();

    return (
        <>
            <Header size="large">{t('account:security.password.header', 'Password')}</Header>

            <MutationFormPage<ChangePasswordMutation, IValues>
                mutation={gql(ChangePassword)}

                data={(values) => ({
                    variables: values
                })}

                success={t('account:security.password.success', 'Successfully changed your password.')}
                failure={t('account:security.password.failure', 'Failed to change your password.')}
            >
                {(handleSubmit, {loading}) => (
                    <>
                        {!loading && <PasswordForm onSubmit={handleSubmit} />}
                    </>
                )}
            </MutationFormPage>
        </>
    );
};
