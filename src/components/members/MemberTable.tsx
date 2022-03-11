import React from 'react';
import {useTranslation} from 'react-i18next';
import {Table} from 'semantic-ui-react';

import {MandateFragment, MemberFragment, MembershipFragment} from '../../generated/graphql';
import {hasAcceptedMandates} from '../../util';
import {TableSelectableRow} from '../table/TableSelectableRow';
import {YesNo} from '../util/YesNo';

export interface MemberTableProps {
    members: (MemberFragment & {
        latestMembership: MembershipFragment;
        mandates: {
            values: MandateFragment[]
        };
    })[];
}

export const MemberTable: React.FC<MemberTableProps> = ({members}) => {
    const {t} = useTranslation();

    return (
        <Table selectable stackable>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>{t('members:member.firstName', 'First name')}</Table.HeaderCell>
                    <Table.HeaderCell>{t('members:member.initials', 'Initials')}</Table.HeaderCell>
                    <Table.HeaderCell>{t('members:member.lastName', 'Last name')}</Table.HeaderCell>
                    <Table.HeaderCell>{t('members:member.email', 'Email address')}</Table.HeaderCell>
                    <Table.HeaderCell>{t('members:member.language', 'Language')}</Table.HeaderCell>
                    <Table.HeaderCell>{t('members:member.isMember', 'Is member')}</Table.HeaderCell>
                    <Table.HeaderCell>{t('members:member.hasMandate', 'Has mandate')}</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {members.map((member) => (
                    <TableSelectableRow key={member.id} to={`/members/${member.id}`}>
                        <Table.Cell>{member.firstName}</Table.Cell>
                        <Table.Cell>{member.initials}</Table.Cell>
                        <Table.Cell>{member.lastName}</Table.Cell>
                        <Table.Cell>{member.email}</Table.Cell>
                        <Table.Cell>{t(`members:member.languages.${member.language}`)}</Table.Cell>
                        <Table.Cell>
                            <YesNo value={!member.latestMembership.endedAt && member.latestMembership.isAccepted} />
                        </Table.Cell>
                        <Table.Cell>
                            <YesNo value={hasAcceptedMandates(member.mandates.values)} />
                        </Table.Cell>
                    </TableSelectableRow>
                ))}
            </Table.Body>
        </Table>
    );
};
