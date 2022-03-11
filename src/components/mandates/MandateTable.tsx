import React from 'react';
import {useTranslation} from 'react-i18next';
import {Table} from 'semantic-ui-react';
import moment from 'moment';

import {MandateType} from '../../components/mandate/MandateType';
import {TableSelectableRow} from '../../components/table/TableSelectableRow';
import {YesNo} from '../../components/util/YesNo';
import {MandateFragment, MemberFragment} from '../../generated/graphql';

export interface MandateTableProps {
    mandates: (MandateFragment & {
        member?: MemberFragment;
    })[];
    urlPrefix?: string;
    hideMember?: boolean;
    hideIsFirstTransaction?: boolean;
}

export const MandateTable: React.FC<MandateTableProps> = ({mandates, urlPrefix = '/mandates', hideMember = false, hideIsFirstTransaction = false}) => {
    const {t} = useTranslation();

    return (
        <Table selectable stackable>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>{t('mandates:mandate.mandateId', 'Identifier')}</Table.HeaderCell>
                    <Table.HeaderCell>{t('mandates:mandate.type', 'Type')}</Table.HeaderCell>
                    <Table.HeaderCell>{t('mandates:mandate.status', 'Status')}</Table.HeaderCell>
                    {!hideMember && <Table.HeaderCell>{t('mandates:mandate.member', 'Member')}</Table.HeaderCell>}
                    <Table.HeaderCell>{t('mandates:mandate.createdAt', 'Created at')}</Table.HeaderCell>
                    <Table.HeaderCell>{t('mandates:mandate.acceptedAt', 'Accepted at')}</Table.HeaderCell>
                    {!hideIsFirstTransaction && <Table.HeaderCell>{t('mandates:mandate.isFirstTransaction', 'Is first transaction')}</Table.HeaderCell>}
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {mandates.map((mandate) => (
                    <TableSelectableRow key={mandate.id} to={`${urlPrefix}/${mandate.id}`}>
                        <Table.Cell>{mandate.mandateId}</Table.Cell>
                        <Table.Cell><MandateType mandate={mandate} /></Table.Cell>
                        <Table.Cell>{mandate.status}</Table.Cell>
                        {!hideMember && (mandate.member ? <Table.Cell>{mandate.member.initials} {mandate.member.lastName}</Table.Cell> : <Table.Cell />)}
                        <Table.Cell>{moment(mandate.createdAt).format('YYYY-MM-DD HH:mm')}</Table.Cell>
                        <Table.Cell>
                            {mandate.acceptedAt ?
                                moment(mandate.acceptedAt).format('YYYY-MM-DD HH:mm') :
                                <i>{t('general:date.never', 'Never')}</i>}
                        </Table.Cell>
                        {!hideIsFirstTransaction && <Table.Cell><YesNo value={mandate.isFirstTransaction} /></Table.Cell>}
                    </TableSelectableRow>
                ))}
            </Table.Body>
        </Table>
    );
};
