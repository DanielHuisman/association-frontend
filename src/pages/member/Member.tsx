import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {RouteComponentProps} from 'react-router';
import {Container, Header, Loader, Table} from 'semantic-ui-react';
import moment from 'moment';

import GetMember from '../../queries/GetMember.graphql';
import {GetMember as GetMemberType} from '../../types/generatedTypes';

interface IRouteParams {
    memberId: string;
}

const Member = ({match}: RouteComponentProps<IRouteParams>) => {
    const {t} = useTranslation();
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
                                <Table.Cell>{t('members:member.firstName', 'First name')}</Table.Cell>
                                <Table.Cell>{data.member.firstName}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('members:member.lastName', 'Last name')}</Table.Cell>
                                <Table.Cell>{data.member.lastName}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('members:member.email', 'Email address')}</Table.Cell>
                                <Table.Cell>{data.member.email}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('members:member.language', 'Language')}</Table.Cell>
                                <Table.Cell>{data.member.language}</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>

                    <Header size="large">{t('mandates:mandates.header', 'Mandates')}</Header>
                    {data.member.mandates.length > 0 && <Table stackable>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>{t('mandates:mandate.mandateId', 'Identifier')}</Table.HeaderCell>
                                <Table.HeaderCell>{t('mandates:mandate.reason', 'Reason')}</Table.HeaderCell>
                                <Table.HeaderCell>{t('mandates:mandate.type', 'Type')}</Table.HeaderCell>
                                <Table.HeaderCell>{t('mandates:mandate.iban', 'IBAN')}</Table.HeaderCell>
                                <Table.HeaderCell>{t('mandates:mandate.bic', 'BIC')}</Table.HeaderCell>
                                <Table.HeaderCell>{t('mandates:mandate.acceptedAt', 'Accepted at')}</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {data.member.mandates.map((mandate) => (
                                <Table.Row key={mandate.id}>
                                    <Table.Cell>{mandate.mandateId}</Table.Cell>
                                    <Table.Cell>{mandate.reason}</Table.Cell>
                                    <Table.Cell>
                                        {mandate.__typename === 'DigitalMandate' ?
                                            t('mandates:mandate.types.digital', 'Digital mandate') :
                                            t('mandates:mandate.types.paper', 'Paper mandate')}
                                    </Table.Cell>
                                    <Table.Cell>{mandate.iban}</Table.Cell>
                                    <Table.Cell>{mandate.bic}</Table.Cell>
                                    <Table.Cell>{moment(mandate.acceptedAt).format('YYYY-MM-DD HH:mm')}</Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>}
                </>
            )}
        </Container>
    );
};

export default Member;
