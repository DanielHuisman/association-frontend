import React, {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Link, RouteComponentProps} from 'react-router-dom';
import {Header, Loader, Message, Button} from 'semantic-ui-react';

import SmallContainer from '../../../components/container/SmallContainer';
import {VerifyEmailMutation} from '../../../generated/graphql';
import {client} from '../../../graphql';
import VerifyEmailDocument from '../../../mutations/VerifyEmail.graphql';
import {translateError} from '../../../util';

interface IRouteParams {
    token: string;
}

const VerifyEmail = ({match}: RouteComponentProps<IRouteParams>) => {
    const {t} = useTranslation();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const token = match.params.token;

    useEffect(() => {
        (async () => {
            try {
                await client.mutate<VerifyEmailMutation>({
                    mutation: VerifyEmailDocument,
                    variables: {
                        token
                    }
                });

                setSuccess(true);
            } catch (err) {
                setError(err);
            }
        })();
    }, []);

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

export default VerifyEmail;
