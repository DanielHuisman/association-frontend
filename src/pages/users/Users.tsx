import React from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {useQuery} from '@apollo/react-hooks';
import {Container, Header, Loader, Table} from 'semantic-ui-react';

import TableSelectableRow from '../../components/table/TableSelectableRow';
import {GetUsersQuery, GetUsersQueryVariables} from '../../generated/graphql';
import GetUsers from '../../queries/GetUsers.graphql';

const Users = () => {
    const {t} = useTranslation();
    const {loading, data, error} = useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsers);

    if (error) {
        throw error;
    }

    return (
        <Container>
            <Helmet title={t('users:users.header', 'Users')} />
            <Header size="huge">{t('users:users.header', 'Users')}</Header>

            {loading && <Loader active />}

            {data && (
                <Table selectable stackable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>{t('users:user.name', 'Name')}</Table.HeaderCell>
                            <Table.HeaderCell>{t('users:user.email', 'Email address')}</Table.HeaderCell>
                            <Table.HeaderCell>{t('users:user.role', 'Role')}</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {data.users.values.map((user) => (
                            <TableSelectableRow key={user.id} to={`/users/${user.id}`}>
                                <Table.Cell>{user.name}</Table.Cell>
                                <Table.Cell>{user.email}</Table.Cell>
                                <Table.Cell>{user.role}</Table.Cell>
                            </TableSelectableRow>
                        ))}
                    </Table.Body>
                </Table>
            )}
        </Container>
    );
};

export default Users;
