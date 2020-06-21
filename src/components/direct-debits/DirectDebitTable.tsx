import React from 'react';
import {useTranslation} from 'react-i18next';
import {Table} from 'semantic-ui-react';
import moment from 'moment';

import TableSelectableRow from '../../components/table/TableSelectableRow';
import {DirectDebitFragment} from '../../generated/graphql';
import {formatCurrency} from '../../util';

interface IProps {
    directDebits: DirectDebitFragment[];
}

const DirectDebitTable = ({directDebits}: IProps) => {
    const {t} = useTranslation();

    return (
        <Table selectable stackable>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>{t('directDebits:directDebit.messageId', 'Identifier')}</Table.HeaderCell>
                    <Table.HeaderCell>{t('directDebits:directDebit.collectionDate', 'Collection date')}</Table.HeaderCell>
                    <Table.HeaderCell>{t('directDebits:directDebit.status', 'Status')}</Table.HeaderCell>
                    <Table.HeaderCell>{t('directDebits:directDebit.instructionCount', 'Instructions')}</Table.HeaderCell>
                    <Table.HeaderCell>{t('directDebits:directDebit.amount', 'Amount')}</Table.HeaderCell>
                    <Table.HeaderCell>{t('directDebits:directDebit.createdAt', 'Created at')}</Table.HeaderCell>
                    <Table.HeaderCell>{t('directDebits:directDebit.updatedAt', 'Updated at')}</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {directDebits.map((directDebit) => (
                    <TableSelectableRow key={directDebit.id} to={`/direct-debits/${directDebit.id}`}>
                        <Table.Cell>{directDebit.messageId}</Table.Cell>
                        <Table.Cell>{moment(directDebit.collectionDate).format('YYYY-MM-DD')}</Table.Cell>
                        <Table.Cell>{directDebit.status}</Table.Cell>
                        <Table.Cell>{directDebit.instructionCount}</Table.Cell>
                        <Table.Cell>{formatCurrency(directDebit.amount)}</Table.Cell>
                        <Table.Cell>{moment(directDebit.createdAt).format('YYYY-MM-DD HH:mm')}</Table.Cell>
                        <Table.Cell>{moment(directDebit.updatedAt).format('YYYY-MM-DD HH:mm')}</Table.Cell>
                    </TableSelectableRow>
                ))}
            </Table.Body>
        </Table>
    );
};

export default DirectDebitTable;
