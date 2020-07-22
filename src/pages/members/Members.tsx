import React from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {useQuery} from '@apollo/react-hooks';
import {Container, Header, Loader, Table} from 'semantic-ui-react';

import TableSelectableRow from '../../components/table/TableSelectableRow';
import YesNo from '../../components/util/YesNo';
import {GetMembersQuery, GetMembersQueryVariables} from '../../generated/graphql';
import GetMembers from '../../queries/GetMembers.graphql';
import {hasAcceptedMandates} from '../../util';

const Members = () => {
    const {t} = useTranslation();
    const {loading, data, error} = useQuery<GetMembersQuery, GetMembersQueryVariables>(GetMembers);

    if (error) {
        throw error;
    }

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
                        {data.members.values.filter(hasAcceptedMandates).length} / {data.members.values.length}
                    </p>
                    <Table selectable stackable>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>{t('members:member.firstName', 'First name')}</Table.HeaderCell>
                                <Table.HeaderCell>{t('members:member.initials', 'Initials')}</Table.HeaderCell>
                                <Table.HeaderCell>{t('members:member.lastName', 'Last name')}</Table.HeaderCell>
                                <Table.HeaderCell>{t('members:member.email', 'Email address')}</Table.HeaderCell>
                                <Table.HeaderCell>{t('members:member.language', 'Language')}</Table.HeaderCell>
                                <Table.HeaderCell>{t('members:member.hasMandate', 'Has mandate')}</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {data.members.values.map((member) => (
                                <TableSelectableRow key={member.id} to={`/members/${member.id}`}>
                                    <Table.Cell>{member.firstName}</Table.Cell>
                                    <Table.Cell>{member.initials}</Table.Cell>
                                    <Table.Cell>{member.lastName}</Table.Cell>
                                    <Table.Cell>{member.email}</Table.Cell>
                                    <Table.Cell>{t(`members:member.languages.${member.language}`)}</Table.Cell>
                                    <Table.Cell>
                                        <YesNo value={hasAcceptedMandates(member)} />
                                    </Table.Cell>
                                </TableSelectableRow>
                            ))}
                        </Table.Body>
                    </Table>
                </>
            )}
        </Container>
    );
};

export default Members;
