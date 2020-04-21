import React from 'react';
import {useTranslation} from 'react-i18next';
import {Table} from 'semantic-ui-react';

import TableSelectableRow from '../../components/table/TableSelectableRow';
import {DirectDebitWarningFragment} from '../../types/generatedTypes';

interface IProps {
    warnings: DirectDebitWarningFragment[];
}

const DirectDebitWarningTable = ({warnings}: IProps) => {
    const {t} = useTranslation();

    return (
        <Table selectable stackable>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>{t('directDebits:directDebitInstruction.instructionId', 'Identifier')}</Table.HeaderCell>
                    <Table.HeaderCell>{t('directDebits:directDebitInstruction.description', 'Description')}</Table.HeaderCell>
                    <Table.HeaderCell>{t('directDebits:directDebitBatch.batchId', 'Batch identifier')}</Table.HeaderCell>
                    <Table.HeaderCell>{t('directDebits:directDebitBatch.sequenceType', 'Batch type')}</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {warnings.map((warning) => (
                    <TableSelectableRow key={warning.id} to={`/members/${warning.member.id}`}>
                        <Table.Cell>{warning.description}</Table.Cell>
                    </TableSelectableRow>
                ))}
            </Table.Body>
        </Table>
    );
};

export default DirectDebitWarningTable;
