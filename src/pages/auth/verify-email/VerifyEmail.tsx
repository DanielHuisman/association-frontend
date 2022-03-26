import {gql} from '@apollo/react-hooks';
import React, {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {useParams, Link} from 'react-router-dom';
import {Header, Loader, Message, Button} from 'semantic-ui-react';

import {SmallContainer} from '../../../components/container/SmallContainer';
import {VerifyEmailMutation} from '../../../generated/graphql';
import {client} from '../../../graphql';
import VerifyEmailQL from '../../../mutations/VerifyEmail.graphql';
import {translateError} from '../../../util';

type Params = {
    token: string;
};

export const VerifyEmail: React.FC = () => {
    const params = useParams<Params>();
    const {t} = useTranslation();

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                await client.mutate<VerifyEmailMutation>({
                    mutation: gql(VerifyEmailQL),
                    variables: {
                        token: params.token
                    }
                });

                setSuccess(true);
            } catch (err) {
                setError(err);
            }
        })();
    }, [params.token]);

    return (
        <SmallContainer>
            <Header size="huge">{t('auth:verifyEmail.header', 'Verify email address')}</Header>

            {!success && !error && <Loader active />}

            {success && (
                <>
                    <Message success visible>
                        <b>
                            {t('auth:verifyEmail.success', 'Successfully verified your email address. You can sign in to your account now.')}
                        </b>
                    </Message>

                    <Button as={Link} to="/login" color="pink">
                        {t('auth:verifyEmail.toSignIn', 'Go to sign in')}
                    </Button>
                </>
            )}

            {error && (
                <Message error visible>
                    <Message.Header>
                        {t('auth:verifyEmail.failure', 'Failed to verify your email address.')}
                    </Message.Header>
                    {translateError(t, error)}
                </Message>
            )}
        </SmallContainer>
    );
};
