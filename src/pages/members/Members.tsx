import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {Container, Header, Loader, Table} from 'semantic-ui-react';

import TableSelectableRow from '../../components/table/TableSelectableRow';
import GetMembers from '../../queries/GetMembers.graphql';
import {GetMembers as GetMembersType} from '../../types/generatedTypes';

const Members = () => {
    const {t} = useTranslation();
    const {loading, data, error} = useQuery<GetMembersType>(GetMembers);

    if (error) {
        throw error;
    }

    return (
        <Container>
            <Helmet title={t('members:members.header', 'Members')} />
            <Header size="huge">{t('members:members.header', 'Members')}</Header>

            {loading && <Loader active />}

            {data && (
                <Table selectable stackable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>First name</Table.HeaderCell>
                            <Table.HeaderCell>Last name</Table.HeaderCell>
                            <Table.HeaderCell>Email address</Table.HeaderCell>
                            <Table.HeaderCell>Language</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {data.members.map((member) => (
                            <TableSelectableRow key={member.id} to={`/members/${member.id}`}>
                                <Table.Cell>{member.firstName}</Table.Cell>
                                <Table.Cell>{member.lastName}</Table.Cell>
                                <Table.Cell>{member.email}</Table.Cell>
                                <Table.Cell>{member.language}</Table.Cell>
                            </TableSelectableRow>
                        ))}
                    </Table.Body>
                </Table>
            )}
        </Container>
    );
};

export default Members;
