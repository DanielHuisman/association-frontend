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
                    <Table.HeaderCell>{t('directDebits:directDebitWarning.description', 'Description')}</Table.HeaderCell>
                    <Table.HeaderCell>{t('directDebits:directDebitWarning.member', 'Member')}</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {warnings.map((warning) => warning.member ? (
                    <TableSelectableRow key={warning.id} to={`/members/${warning.member.id}`}>
                        <Table.Cell>{warning.description}</Table.Cell>
                        <Table.Cell>{warning.member.firstName} {warning.member.lastName}</Table.Cell>
                    </TableSelectableRow>
                ) : (
                    <Table.Row key={warning.id}>
                        <Table.Cell>{warning.description}</Table.Cell>
                        <Table.Cell>-</Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    );
};

export default DirectDebitWarningTable;
