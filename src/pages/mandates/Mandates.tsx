import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {Container, Header, Loader, Table} from 'semantic-ui-react';
import moment from 'moment';

import MandateType from '../../components/mandate/MandateType';
import TableSelectableRow from '../../components/table/TableSelectableRow';
import YesNo from '../../components/util/YesNo';
import GetMandates from '../../queries/GetMandates.graphql';
import {GetMandates as GetMandatesType} from '../../types/generatedTypes';

const Mandates = () => {
    const {t} = useTranslation();
    const {loading, data, error} = useQuery<GetMandatesType>(GetMandates);

    if (error) {
        throw error;
    }

    return (
        <Container>
            <Helmet title={t('mandates:mandates.header', 'Mandates')} />
            <Header size="huge">{t('mandates:mandates.header', 'Mandates')}</Header>

            {loading && <Loader active />}

            {data && (
                <Table selectable stackable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>{t('mandates:mandate.mandateId', 'Identifier')}</Table.HeaderCell>
                            <Table.HeaderCell>{t('mandates:mandate.type', 'Type')}</Table.HeaderCell>
                            <Table.HeaderCell>{t('mandates:mandate.status', 'Status')}</Table.HeaderCell>
                            <Table.HeaderCell>{t('mandates:mandate.member', 'Member')}</Table.HeaderCell>
                            <Table.HeaderCell>{t('mandates:mandate.createdAt', 'Created at')}</Table.HeaderCell>
                            <Table.HeaderCell>{t('mandates:mandate.acceptedAt', 'Accepted at')}</Table.HeaderCell>
                            <Table.HeaderCell>{t('mandates:mandate.isFirstTransaction', 'Is first transaction')}</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {data.mandates.map((mandate) => (
                            <TableSelectableRow key={mandate.id} to={`/mandates/${mandate.id}`}>
                                <Table.Cell>{mandate.mandateId}</Table.Cell>
                                <Table.Cell><MandateType mandate={mandate} /></Table.Cell>
                                <Table.Cell>{mandate.member.firstName} {mandate.member.lastName}</Table.Cell>
                                <Table.Cell>{moment(mandate.createdAt).format('YYYY-MM-DD HH:mm')}</Table.Cell>
                                <Table.Cell>{mandate.acceptedAt ? moment(mandate.acceptedAt).format('YYYY-MM-DD HH:mm') : <i>Never</i>}</Table.Cell>
                                <Table.Cell><YesNo value={mandate.isFirstTransaction} /></Table.Cell>
                            </TableSelectableRow>
                        ))}
                    </Table.Body>
                </Table>
            )}
        </Container>
    );
};

export default Mandates;
