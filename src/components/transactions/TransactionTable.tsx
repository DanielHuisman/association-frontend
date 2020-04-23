import React from 'react';
import {useTranslation} from 'react-i18next';
import {Table} from 'semantic-ui-react';
import moment from 'moment';

import TableSelectableRow from '../../components/table/TableSelectableRow';
import {TransactionFragment} from '../../types/generatedTypes';
import {formatCurrency} from '../../util';

import TransactionType from './TransactionType';

interface IProps {
    transactions: TransactionFragment[];
}

const TransactionTable = ({transactions}: IProps) => {
    const {t} = useTranslation();

    return (
        <Table selectable stackable>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>{t('transactions:transaction.type', 'Type')}</Table.HeaderCell>
                    <Table.HeaderCell>{t('transactions:transaction.description', 'Description')}</Table.HeaderCell>
                    <Table.HeaderCell>{t('transactions:transaction.amount', 'Amount')}</Table.HeaderCell>
                    <Table.HeaderCell>{t('transactions:transaction.createdAt', 'Created at')}</Table.HeaderCell>
                    <Table.HeaderCell>{t('transactions:transaction.updatedAt', 'Updated at')}</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {transactions.map((transaction) => (
                    <TableSelectableRow key={transaction.id} to={`/transactions/${transaction.id}`}>
                        <Table.Cell><TransactionType transaction={transaction} /></Table.Cell>
                        <Table.Cell>{transaction.description}</Table.Cell>
                        <Table.Cell>{formatCurrency(transaction.amount)}</Table.Cell>
                        <Table.Cell>{moment(transaction.createdAt).format('YYYY-MM-DD HH:mm')}</Table.Cell>
                        <Table.Cell>{moment(transaction.updatedAt).format('YYYY-MM-DD HH:mm')}</Table.Cell>
                    </TableSelectableRow>
                ))}
            </Table.Body>
        </Table>
    );
};

export default TransactionTable;
