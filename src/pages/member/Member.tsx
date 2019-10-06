import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {Helmet} from 'react-helmet';
import {RouteComponentProps} from 'react-router';
import {Container, Header, Loader, Table} from 'semantic-ui-react';

import GetMember from '../../queries/GetMember.graphql';
import {GetMember as GetMemberType} from '../../types/generatedTypes';

interface IRouteParams {
    memberId: string;
}

const Member = ({match}: RouteComponentProps<IRouteParams>) => {
    const {loading, data, error} = useQuery<GetMemberType>(GetMember, {
        variables: {
            id: match.params.memberId
        }
    });

    if (error) {
        throw error;
    }

    return (
        <Container>
            {loading && <Loader active />}

            {data && (
                <>
                    <Helmet title={`${data.member.firstName} ${data.member.lastName}`} />
                    <Header size="huge">{data.member.firstName} {data.member.lastName}</Header>

                    <Table definition stackable>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>First name</Table.Cell>
                                <Table.Cell>{data.member.firstName}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Last name</Table.Cell>
                                <Table.Cell>{data.member.lastName}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Email address</Table.Cell>
                                <Table.Cell>{data.member.email}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Language</Table.Cell>
                                <Table.Cell>{data.member.language}</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </>
            )}
        </Container>
    );
};

export default Member;
