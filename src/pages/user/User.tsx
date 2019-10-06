import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {RouteComponentProps} from 'react-router';
import {Container, Header, Loader, Table} from 'semantic-ui-react';

import GetUser from '../../queries/GetUser.graphql';
import {GetUser as GetUserType} from '../../types/generatedTypes';

interface IRouteParams {
    userId: string;
}

const User = ({match}: RouteComponentProps<IRouteParams>) => {
    const {t} = useTranslation();
    const {loading, data, error} = useQuery<GetUserType>(GetUser, {
        variables: {
            id: match.params.userId
        }
    });

    if (error) {
        throw error;
    }

    return (
        <Container>
            {loading && <Loader active />}

            {data && !data.user && <>Not found</>}
            {data && data.user && (
                <>
                    <Helmet title={data.user.name} />
                    <Header size="huge">{data.user.name}</Header>

                    <Table definition stackable>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>{t('users:user.name', 'Name')}</Table.Cell>
                                <Table.Cell>{data.user.name}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('users:user.email', 'Email address')}</Table.Cell>
                                <Table.Cell>{data.user.email}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('users:user.role', 'Role')}</Table.Cell>
                                <Table.Cell>{data.user.role}</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </>
            )}
        </Container>
    );
};

export default User;
