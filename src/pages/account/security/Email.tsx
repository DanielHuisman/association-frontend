import React from 'react';
import {useTranslation} from 'react-i18next';
import {Header} from 'semantic-ui-react';

import {MutationFormPage} from '../../../components/page';
import {
    ChangeEmailMutation,
    ProviderFragment
} from '../../../generated/graphql';
import ChangeEmail from '../../../mutations/ChangeEmail.graphql';

import {EmailForm, IValues} from './EmailForm';

export interface EmailProps {
    provider: ProviderFragment;
}

export const Email: React.FC<EmailProps> = ({provider}) => {
    const {t} = useTranslation();

    return (
        <>
            <Header size="large">{t('account:security.email.header', 'Email address')}</Header>

            <MutationFormPage<ChangeEmailMutation, IValues>
                mutation={ChangeEmail}

                data={(values) => ({
                    variables: {
                        email: values.email
                    }
                })}

                success={t('account:security.email.success', 'Successfully changed your email address.')}
                failure={t('account:security.email.failure', 'Failed to change your email address.')}
            >
                {(handleSubmit, {loading}) => (
                    <>
                        {!loading && <EmailForm provider={provider} onSubmit={handleSubmit} />}
                    </>
                )}
            </MutationFormPage>
        </>
    );
};
