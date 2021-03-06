import React from 'react';
import {useTranslation} from 'react-i18next';
import {Table} from 'semantic-ui-react';

import {TableSelectableRow} from '../../components/table/TableSelectableRow';
import {DirectDebitBatchFragment} from '../../generated/graphql';
import {formatCurrency} from '../../util';

export interface DirectDebitBatchTableProps {
    directDebitId: string;
    batches: DirectDebitBatchFragment[];
}

export const DirectDebitBatchTable: React.FC<DirectDebitBatchTableProps> = ({directDebitId, batches}) => {
    const {t} = useTranslation();

    return (
        <Table selectable stackable>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>{t('directDebits:directDebitBatch.batchId', 'Identifier')}</Table.HeaderCell>
                    <Table.HeaderCell>{t('directDebits:directDebitBatch.sequenceType', 'Sequence type')}</Table.HeaderCell>
                    <Table.HeaderCell>{t('directDebits:directDebit.instructionCount', 'Instructions')}</Table.HeaderCell>
                    <Table.HeaderCell>{t('directDebits:directDebit.amount', 'Amount')}</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {batches.map((batch) => (
                    <TableSelectableRow key={batch.id} to={`/direct-debits/${directDebitId}/batches/${batch.id}`}>
                        <Table.Cell>{batch.batchId}</Table.Cell>
                        <Table.Cell>{batch.sequenceType}</Table.Cell>
                        <Table.Cell>{batch.instructionCount}</Table.Cell>
                        <Table.Cell>{formatCurrency(batch.amount)}</Table.Cell>
                    </TableSelectableRow>
                ))}
            </Table.Body>
        </Table>
    );
};
