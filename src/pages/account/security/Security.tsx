import React from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {Header, Divider} from 'semantic-ui-react';

import {Page} from '../../../components/page/Page';
import GetProfile from '../../../queries/GetProfile.graphql';
import {GetProfileQuery} from '../../../generated/graphql';

import Email from './Email';
import Password from './Password';

const Security = () => {
    const {t} = useTranslation();

    return (
        <Page<GetProfileQuery> query={GetProfile}>
            {({data}) => {
                const localProvider = data.me.providers.values.find((provider) => provider.type === 'local');

                return (
                    <>
                        <Helmet title={t('account:security.header', 'Security')} />
                        <Header size="huge">{t('account:security.header', 'Security')}</Header>

                        {localProvider && (
                            <>
                                <Email provider={localProvider} />

                                <Divider />

                                <Password />
                            </>
                        )}
                    </>
                );
            }}
        </Page>
    );
};

export default Security;
