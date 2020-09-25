import React, {useContext} from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {Header} from 'semantic-ui-react';

import {UserContext} from '../../../components/authentication/UserContext';
import {Page} from '../../../components/page/Page';
import {GetMemberMandatesQuery} from '../../../generated/graphql';
import GetMemberMandates from '../../../queries/GetMemberMandates.graphql';

const Mandates = () => {
    const {t} = useTranslation();
    const member = useContext(UserContext);

    return (
        <Page<GetMemberMandatesQuery> query={GetMemberMandates} queryVariables={{id: member.id}}>
            {({data}) => {
                return (
                    <>
                        <Helmet title={t('account:mandates.header', 'Mandates')} />
                        <Header size="huge">{t('account:mandates.header', 'Mandates')}</Header>

                        {data.member.mandates.values.map((mandate) => (
                            <div key={mandate.id}>
                                {mandate.mandateId}
                            </div>
                        ))}
                    </>
                );
            }}
        </Page>
    );
};

export default Mandates;
