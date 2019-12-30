import React, {useContext} from 'react';
import {useQuery} from '@apollo/react-hooks';
import {Helmet} from 'react-helmet';
import {useTranslation, Trans} from 'react-i18next';
import {Link, RouteComponentProps} from 'react-router-dom';
import {Container, Header, Loader, Table, Button} from 'semantic-ui-react';
import moment from 'moment';

import {UserContext} from '../../components/authentication/UserContext';
import TableSelectableRow from '../../components/table/TableSelectableRow';
import GetMember from '../../queries/GetMember.graphql';
import {GetMember as GetMemberType} from '../../types/generatedTypes';

interface IRouteParams {
    memberId: string;
}

const Overview = ({match}: RouteComponentProps<IRouteParams>) => {
    const {t} = useTranslation();
    const {loading, data, error} = useQuery<GetMemberType>(GetMember, {
        variables: {
            id: match.params.memberId
        }
    });

    const user = useContext(UserContext);

    if (error) {
        throw error;
    }

    return (
        <Container>
            {loading && <Loader active />}

            {data && !data.member && <>{t('general:notFound', 'Not found')}</>}
            {data && data.member && (
                <>
                    <Helmet title={`${data.member.firstName} ${data.member.lastName}`} />
                    <Header size="huge">{data.member.firstName} {data.member.lastName}</Header>

                    {!user && (
                        <p>
                            <Trans i18nKey="members:member.checkInfo">
                                This is your membership information, please check if everything is correct.
                                If something is incorrect or you would like to change something, please contact the board.
                            </Trans>
                        </p>
                    )}

                    <Table compact definition selectable stackable>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>{t('members:member.firstName', 'First name')}</Table.Cell>
                                <Table.Cell>{data.member.firstName}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('members:member.lastName', 'Last name')}</Table.Cell>
                                <Table.Cell>{data.member.lastName}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('members:member.email', 'Email address')}</Table.Cell>
                                <Table.Cell>{data.member.email}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('members:member.address', 'Address')}</Table.Cell>
                                <Table.Cell>{data.member.address}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('members:member.postalCode', 'Postal code')}</Table.Cell>
                                <Table.Cell>{data.member.postalCode}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('members:member.city', 'City')}</Table.Cell>
                                <Table.Cell>{data.member.city}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('members:member.phoneNumber', 'Phone number')}</Table.Cell>
                                <Table.Cell>{data.member.phoneNumber}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('members:member.birthdate', 'Date of birth')}</Table.Cell>
                                <Table.Cell>{moment(data.member.birthdate).format('YYYY-MM-DD')}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('members:member.startOfMembership', 'Start of membership')}</Table.Cell>
                                <Table.Cell>{moment(data.member.startOfMembership).format('YYYY-MM-DD')}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('members:member.endOfMembership', 'End of membership')}</Table.Cell>
                                <Table.Cell>
                                    {data.member.endOfMembership ? moment(data.member.endOfMembership).format('YYYY-MM-DD') : <i>Still a member</i>}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('members:member.language', 'Language')}</Table.Cell>
                                <Table.Cell>{t(`members:member.languages.${data.member.language}`)}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('members:member.pronouns', 'Prefered pronouns')}</Table.Cell>
                                <Table.Cell>{t(`members:member.pronounTypes.${data.member.pronouns}`)}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('members:member.studentType', 'Student type')}</Table.Cell>
                                <Table.Cell>{t(`members:member.studentTypes.${data.member.studentType}`)}</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>

                    <Header size="large">{t('mandates:mandates.header', 'Mandates')}</Header>
                    {data.member.mandates.length > 0 && (
                        <Table selectable stackable>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>{t('mandates:mandate.mandateId', 'Identifier')}</Table.HeaderCell>
                                    <Table.HeaderCell>{t('mandates:mandate.status', 'Status')}</Table.HeaderCell>
                                    <Table.HeaderCell>{t('mandates:mandate.reason', 'Reason')}</Table.HeaderCell>
                                    <Table.HeaderCell>{t('mandates:mandate.type', 'Type')}</Table.HeaderCell>
                                    <Table.HeaderCell>{t('mandates:mandate.iban', 'IBAN')}</Table.HeaderCell>
                                    <Table.HeaderCell>{t('mandates:mandate.bic', 'BIC')}</Table.HeaderCell>
                                    <Table.HeaderCell>{t('mandates:mandate.acceptedAt', 'Accepted at')}</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {data.member.mandates.map((mandate) => (
                                    <TableSelectableRow key={mandate.id} to={`/mandates/${mandate.id}`}>
                                        <Table.Cell>{mandate.mandateId}</Table.Cell>
                                        <Table.Cell>{mandate.status}</Table.Cell>
                                        <Table.Cell>{mandate.reason}</Table.Cell>
                                        <Table.Cell>
                                            {mandate.__typename === 'DigitalMandate' ?
                                                t('mandates:mandate.types.digital', 'Digital mandate') :
                                                t('mandates:mandate.types.paper', 'Paper mandate')}
                                        </Table.Cell>
                                        <Table.Cell>{mandate.iban}</Table.Cell>
                                        <Table.Cell>{mandate.bic}</Table.Cell>
                                        <Table.Cell>
                                            {mandate.acceptedAt ?
                                                moment(mandate.acceptedAt).format('YYYY-MM-DD HH:mm') :
                                                <i>{t('general:date.never', 'Never')}</i>}
                                        </Table.Cell>
                                    </TableSelectableRow>
                                ))}
                            </Table.Body>
                        </Table>
                    )}

                    {!user && data.member.mandates.length === 0 && (
                        <>
                            <p>
                                <Trans i18nKey="mandates:sign.required">
                                    You haven't signed a mandate yet. Please sign a mandate,
                                    so J&SV Exaltio will be able to deduct the yearly membership fee from your bank account.
                                </Trans>
                            </p>

                            <Button as={Link} to={`${match.path}/mandates/sign`} color="blue">
                                {t('mandates:sign.button', 'Sign a mandate')}
                            </Button>
                        </>
                    )}

                    {user && data.member.mandates.length === 0 && (
                        <p>{t('mandates:mandates.none', 'Member has no mandates.')}</p>
                    )}
                </>
            )}
        </Container>
    );
};

export default Overview;
