import {gql} from '@apollo/react-hooks';
import React from 'react';
import {Helmet} from 'react-helmet';
import {Trans, useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import {Header, Divider, Message, Button} from 'semantic-ui-react';

import {Page} from '../../../components/page/Page';
import {GetProfileQuery} from '../../../generated/graphql';
import GetProfile from '../../../queries/GetProfile.graphql';

import {Image} from './Image';
import {Information} from './Information';

export const Profile: React.FC = () => {
    const {t} = useTranslation();

    return (
        <Page<GetProfileQuery> query={gql(GetProfile)}>
            {({data}) => {
                return (
                    <>
                        <Helmet title={t('account:profile.header', 'Profile')} />
                        <Header size="huge">{t('account:profile.header', 'Profile')}</Header>

                        {!data.me.hasMandate && (
                            <Message warning>
                                <Message.Header>{t('account:profile.noMandate.header', 'No mandate signed')}</Message.Header>
                                <Message.Content>
                                    <p>
                                        <Trans i18nKey="account:profile.noMandate.content">
                                            You have not yet signed a mandate, which is required to automatically deduct the yearly membership fee
                                            from your bank account. Please sign one here:
                                        </Trans>
                                    </p>

                                    <Button as={Link} to="/sign" color="blue">
                                        {t('account:profile.noMandate.button', 'Sign mandate')}
                                    </Button>
                                </Message.Content>
                            </Message>
                        )}

                        <Image />

                        <Divider />

                        <Information />
                    </>
                );
            }}
        </Page>
    );
};
