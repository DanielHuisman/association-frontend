import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import {Button} from 'semantic-ui-react';

import {UserContext} from '../../../components/authentication/UserContext';
import MandateTable from '../../../components/mandates/MandateTable';
import {Page} from '../../../components/page/Page';
import {GetMemberMandatesQuery} from '../../../generated/graphql';
import GetMemberMandates from '../../../queries/GetMemberMandates.graphql';

const MandatesDetails = () => {
    const {t} = useTranslation();
    const member = useContext(UserContext);

    return (
        <Page<GetMemberMandatesQuery> query={GetMemberMandates} queryVariables={{id: member.id}}>
            {({data}) => {
                return (
                    <>
                        <MandateTable mandates={data.member.mandates.values} urlPrefix="/account/mandates" hideMember hideIsFirstTransaction />

                        <Button as={Link} to="/sign" color="blue">
                            {t('account:mandates.changeBankAccount', 'Change bank account')}
                        </Button>
                    </>
                );
            }}
        </Page>
    );
};

export default MandatesDetails;
