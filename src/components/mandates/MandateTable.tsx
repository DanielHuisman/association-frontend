import React from 'react';
import {useTranslation} from 'react-i18next';
import {Table} from 'semantic-ui-react';
import moment from 'moment';

import MandateType from '../../components/mandate/MandateType';
import TableSelectableRow from '../../components/table/TableSelectableRow';
import YesNo from '../../components/util/YesNo';
import {MandateFragment, MemberFragment} from '../../types/generatedTypes';

interface IProps {
    mandates: Array<MandateFragment & {
        member: MemberFragment;
    }>;
}

const MandateTable = ({mandates}: IProps) => {
    const {t} = useTranslation();

    return (
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
                {mandates.map((mandate) => (
                    <TableSelectableRow key={mandate.id} to={`/mandates/${mandate.id}`}>
                        <Table.Cell>{mandate.mandateId}</Table.Cell>
                        <Table.Cell><MandateType mandate={mandate} /></Table.Cell>
                        <Table.Cell>{mandate.status}</Table.Cell>
                        <Table.Cell>{mandate.member.initials} {mandate.member.lastName}</Table.Cell>
                        <Table.Cell>{moment(mandate.createdAt).format('YYYY-MM-DD HH:mm')}</Table.Cell>
                        <Table.Cell>
                            {mandate.acceptedAt ?
                                moment(mandate.acceptedAt).format('YYYY-MM-DD HH:mm') :
                                <i>{t('general:date.never', 'Never')}</i>}
                        </Table.Cell>
                        <Table.Cell><YesNo value={mandate.isFirstTransaction} /></Table.Cell>
                    </TableSelectableRow>
                ))}
            </Table.Body>
        </Table>
    );
};

export default MandateTable;
