import React, {useContext} from 'react';

import {UserContext} from '../../../components/authentication/UserContext';
import MandateTable from '../../../components/mandates/MandateTable';
import {Page} from '../../../components/page/Page';
import {GetMemberMandatesQuery} from '../../../generated/graphql';
import GetMemberMandates from '../../../queries/GetMemberMandates.graphql';

const MandatesDetails = () => {
    const member = useContext(UserContext);

    return (
        <Page<GetMemberMandatesQuery> query={GetMemberMandates} queryVariables={{id: member.id}}>
            {({data}) => {
                return (
                    <MandateTable mandates={data.member.mandates.values} urlPrefix="/account/mandates" hideMember hideIsFirstTransaction />
                );
            }}
        </Page>
    );
};

export default MandatesDetails;
