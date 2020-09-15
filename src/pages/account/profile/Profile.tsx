import React from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {Header, Divider} from 'semantic-ui-react';

import {Page} from '../../../components/page/Page';
import {GetProfileQuery} from '../../../generated/graphql';
import GetProfile from '../../../queries/GetProfile.graphql';

// import Image from './Image';
import Information from './Information';

const Profile = () => {
    const {t} = useTranslation();

    return (
        <Page<GetProfileQuery> query={GetProfile}>
            {({data}) => {
                return (
                    <>
                        <Helmet title={t('account:profile.header', 'Profile')} />
                        <Header size="huge">{t('account:profile.header', 'Profile')}</Header>

                        {/* <Image /> */}

                        <Divider />

                        <Information />
                    </>
                );
            }}
        </Page>
    );
};

export default Profile;
