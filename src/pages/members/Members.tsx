import React from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {useQuery} from '@apollo/react-hooks';
import {Container, Header, Loader} from 'semantic-ui-react';

import {MemberTable} from '../../components/members/MemberTable';
import {GetMembersQuery, GetMembersQueryVariables} from '../../generated/graphql';
import GetMembers from '../../queries/GetMembers.graphql';
import {hasAcceptedMandates} from '../../util';

export const Members: React.FC = () => {
    const {t} = useTranslation();
    const {loading, data, error} = useQuery<GetMembersQuery, GetMembersQueryVariables>(GetMembers);

    if (error) {
        throw error;
    }

    const actualMembers = data && data.members.values.filter((member) => !member.latestMembership.endedAt);

    return (
        <Container>
            <Helmet title={t('members:members.header', 'Members')} />
            <Header size="huge">{t('members:members.header', 'Members')}</Header>

            {loading && <Loader active />}

            {data && (
                <>
                    <p>{
                        t('members:members.withMandate', 'Members with mandate:')}
                        {' '}
                        {actualMembers.filter((member) => hasAcceptedMandates(member.mandates.values)).length} / {actualMembers.length}
                    </p>
                    <MemberTable members={data.members.values} />
                </>
            )}
        </Container>
    );
};
