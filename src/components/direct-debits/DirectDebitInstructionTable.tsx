import React from 'react';
import {useTranslation} from 'react-i18next';
import {Table} from 'semantic-ui-react';

import TableSelectableRow from '../../components/table/TableSelectableRow';
import {DirectDebitFragment, DirectDebitBatchFragment, DirectDebitInstructionFragment, MandateFragment, MemberFragment} from '../../types/generatedTypes';
import {formatCurrency} from '../../util';

interface IProps {
    directDebit: DirectDebitFragment & {
        batches: Array<DirectDebitBatchFragment & {
            instructions: Array<DirectDebitInstructionFragment & {
                mandate: MandateFragment & {
                    member: MemberFragment;
                }
            }>;
        }>;
    };
}

const DirectDebitInstructionTable = ({directDebit}: IProps) => {
    const {t} = useTranslation();

    return (
        <Table selectable stackable>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>{t('directDebits:directDebitInstruction.instructionId', 'Identifier')}</Table.HeaderCell>
                    <Table.HeaderCell>{t('mandates:mandate.details.name')}</Table.HeaderCell>
                    <Table.HeaderCell>{t('directDebits:directDebitInstruction.description', 'Description')}</Table.HeaderCell>
                    <Table.HeaderCell>{t('directDebits:directDebitInstruction.amount', 'Amount')}</Table.HeaderCell>
                    <Table.HeaderCell>{t('directDebits:directDebitBatch.batchId', 'Batch identifier')}</Table.HeaderCell>
                    <Table.HeaderCell>{t('directDebits:directDebitBatch.sequenceType', 'Batch type')}</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {directDebit.batches.map((batch) => (
                    <React.Fragment key={batch.id}>
                        {batch.instructions.map((instruction) => (
                            <TableSelectableRow key={instruction.id} to={`/direct-debits/${directDebit.id}/instructions/${instruction.id}`}>
                                <Table.Cell>{instruction.instructionId}</Table.Cell>
                                <Table.Cell>{instruction.mandate.member.initials} {instruction.mandate.member.lastName}</Table.Cell>
                                <Table.Cell>{instruction.description}</Table.Cell>
                                <Table.Cell>{formatCurrency(instruction.amount)}</Table.Cell>
                                <Table.Cell>{batch.batchId}</Table.Cell>
                                <Table.Cell>{batch.sequenceType}</Table.Cell>
                            </TableSelectableRow>
                        ))}
                    </React.Fragment>
                ))}
            </Table.Body>
        </Table>
    );
};

export default DirectDebitInstructionTable;
