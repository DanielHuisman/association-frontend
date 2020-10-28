import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {Table} from 'semantic-ui-react';
import moment from 'moment';

import {UserContext} from '../../components/authentication/UserContext';
import TableSelectableRow from '../../components/table/TableSelectableRow';
import {TransactionFragment} from '../../generated/graphql';
import {formatCurrency} from '../../util';

import TransactionType from './TransactionType';

interface IProps {
    transactions: TransactionFragment[];
    urlPrefix?: string;
    hideUpdatedAt?: boolean;
}

interface IContentProps {
    transaction: TransactionFragment;
    hideUpdatedAt: boolean;
}

const TransactionTable = ({transactions, urlPrefix = '/transactions', hideUpdatedAt = false}: IProps) => {
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
                    {!hideUpdatedAt && <Table.HeaderCell>{t('transactions:transaction.updatedAt', 'Updated at')}</Table.HeaderCell>}
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {transactions.map((transaction) => user ? (
                    <TableSelectableRow key={transaction.id} to={`${urlPrefix}/${transaction.id}`}>
                        <TransactionTableRowContent transaction={transaction} hideUpdatedAt={hideUpdatedAt} />
                    </TableSelectableRow>
                ) : (
                    <Table.Row key={transaction.id}>
                        <TransactionTableRowContent transaction={transaction} hideUpdatedAt={hideUpdatedAt} />
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    );
};

const TransactionTableRowContent = ({transaction, hideUpdatedAt}: IContentProps) => (
    <>
        <Table.Cell><TransactionType transaction={transaction} /></Table.Cell>
        <Table.Cell>{transaction.description}</Table.Cell>
        <Table.Cell>{formatCurrency(transaction.amount)}</Table.Cell>
        <Table.Cell>-</Table.Cell>
        <Table.Cell>{moment(transaction.createdAt).format('YYYY-MM-DD HH:mm')}</Table.Cell>
        {!hideUpdatedAt && <Table.Cell>{moment(transaction.updatedAt).format('YYYY-MM-DD HH:mm')}</Table.Cell>}
    </>
);

export default TransactionTable;
