import React from 'react';
import {Trans, useTranslation} from 'react-i18next';
import {useParams, useSearchParams, Link} from 'react-router-dom';
import {Message, Button} from 'semantic-ui-react';

import {MandateStatus} from '../../generated/graphql';

type Params = {
    memberId: string;
};

export const Digital: React.FC = () => {
    const params = useParams<Params>();
    const [searchParams] = useSearchParams();
    const {t} = useTranslation();

    const status = MandateStatus[searchParams.get('status')] || MandateStatus.ERROR;

    return (
        <>
            {status === MandateStatus.ACCEPTED && (
                <>
                    <Message success visible>
                        <Message.Header>
                            {t('mandates:sign.digital.success.header', 'Successfully signed a mandate')}
                        </Message.Header>
                        <Message.Content>
                            {t('mandates:sign.digital.success.description', 'Thank you for signing a mandate. You don\'t need to take any further action.')}
                        </Message.Content>
                    </Message>

                    <Button as={Link} to={`/members/${params.memberId}`} color="blue">
                        {t('mandates:sign.digital.success.button', 'View mandate details')}
                    </Button>
                </>
            )}
            {status !== MandateStatus.ACCEPTED && (
                <>
                    <Message success visible>
                        <Message.Header>
                            {t('mandates:sign.digital.error.header', 'Failed to sign a mandate')}
                        </Message.Header>
                        <Message.Content>
                            <Trans i18nKey="mandates:sign.digital.error.description">
                                An error occurred or the mandate was cancelled. Please try again, possibly using a different method.
                                If you continue to have this problem, please contact the board.
                            </Trans>
                        </Message.Content>
                    </Message>

                    <Button as={Link} to={`/members/${params.memberId}/mandates/sign`} color="blue">
                        <Trans i18nKey="mandates:sign.digital.error.button">Try again</Trans>
                    </Button>
                </>
            )}
        </>
    );
};
