import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {Table} from 'semantic-ui-react';
import moment from 'moment';

import {UserContext} from '../../components/authentication/UserContext';
import TableSelectableRow from '../../components/table/TableSelectableRow';
import {TransactionFragment} from '../../types/generatedTypes';
import {formatCurrency} from '../../util';

import TransactionType from './TransactionType';

interface IProps {
    transactions: TransactionFragment[];
}

interface IContentProps {
    transaction: TransactionFragment;
}

const TransactionTable = ({transactions}: IProps) => {
    const {t} = useTranslation();
    const user = useContext(UserContext);

    return (
        <Table selectable stackable>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>{t('transactions:transaction.type', 'Type')}</Table.HeaderCell>
                    <Table.HeaderCell>{t('transactions:transaction.description', 'Description')}</Table.HeaderCell>
                    <Table.HeaderCell>{t('transactions:transaction.amount', 'Amount')}</Table.HeaderCell>
                    <Table.HeaderCell>{t('transactions:transaction.status', 'Status')}</Table.HeaderCell>
                    <Table.HeaderCell>{t('transactions:transaction.createdAt', 'Created at')}</Table.HeaderCell>
                    <Table.HeaderCell>{t('transactions:transaction.updatedAt', 'Updated at')}</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {transactions.map((transaction) => user ? (
                    <TableSelectableRow key={transaction.id} to={`/transactions/${transaction.id}`}>
                        <TransactionTableRowContent transaction={transaction} />
                    </TableSelectableRow>
                ) : (
                    <Table.Row key={transaction.id}>
                        <TransactionTableRowContent transaction={transaction} />
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    );
};

const TransactionTableRowContent = ({transaction}: IContentProps) => (
    <>
        <Table.Cell><TransactionType transaction={transaction} /></Table.Cell>
        <Table.Cell>{transaction.description}</Table.Cell>
        <Table.Cell>{formatCurrency(transaction.amount)}</Table.Cell>
        <Table.Cell>-</Table.Cell>
        <Table.Cell>{moment(transaction.createdAt).format('YYYY-MM-DD HH:mm')}</Table.Cell>
        <Table.Cell>{moment(transaction.updatedAt).format('YYYY-MM-DD HH:mm')}</Table.Cell>
    </>
);

export default TransactionTable;
