import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {Link, RouteComponentProps} from 'react-router-dom';
import {Container, Header, Loader, Table, Button} from 'semantic-ui-react';
import moment from 'moment';

import MandateType from '../../components/mandate/MandateType';
import GetMandate from '../../queries/GetMandate.graphql';
import {GetMandate as GetMandateType} from '../../types/generatedTypes';

interface IRouteParams {
    mandateId: string;
}

const Mandate = ({match}: RouteComponentProps<IRouteParams>) => {
    const {t} = useTranslation();
    const {loading, data, error} = useQuery<GetMandateType>(GetMandate, {
        variables: {
            id: match.params.mandateId
        }
    });

    if (error) {
        throw error;
    }

    return (
        <Container>
            {loading && <Loader active />}

            {data && (
                <>
                    <Helmet title={t('mandates:mandate.header', 'Mandate')} />
                    <Header size="huge">{t('mandates:mandate.header', 'Mandate')}</Header>

                    <Header size="large">{t('mandates:mandate.details.mandate', 'Mandate details')}</Header>
                    <Table compact definition selectable stackable>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>{t('mandates:mandate.mandateId', 'Identifier')}</Table.Cell>
                                <Table.Cell>{data.mandate.mandateId}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('mandates:mandate.type', 'Type')}</Table.Cell>
                                <Table.Cell><MandateType mandate={data.mandate} /></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('mandates:mandate.reason', 'Reason')}</Table.Cell>
                                <Table.Cell>{data.mandate.reason}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('mandates:mandate.createdAt', 'Created at')}</Table.Cell>
                                <Table.Cell>{moment(data.mandate.createdAt).format('YYYY-MM-DD HH:mm')}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('mandates:mandate.acceptedAt', 'Accepted at')}</Table.Cell>
                                <Table.Cell>{moment(data.mandate.acceptedAt).format('YYYY-MM-DD HH:mm')}</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>

                    <Header size="large">{t('mandates:mandate.details.member', 'Member details')}</Header>
                    <Table compact definition selectable stackable>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>{t('mandates:mandate.details.name', 'Name')}</Table.Cell>
                                <Table.Cell>{data.mandate.member.firstName} {data.mandate.member.lastName}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('mandates:mandate.details.address', 'Address')}</Table.Cell>
                                <Table.Cell><i>Unknown</i></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('mandates:mandate.details.postalCode', 'Postal code')}</Table.Cell>
                                <Table.Cell><i>Unknown</i></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('mandates:mandate.details.city', 'City')}</Table.Cell>
                                <Table.Cell><i>Unknown</i></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('mandates:mandate.iban', 'IBAN')}</Table.Cell>
                                <Table.Cell>{data.mandate.iban}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('mandates:mandate.bic', 'BIC')}</Table.Cell>
                                <Table.Cell>{data.mandate.bic}</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                    <Button as={Link} to={`/members/${data.mandate.member.id}`} color="blue">View member</Button>

                    <Header size="large">{t('mandates:mandate.details.association', 'Association details')}</Header>
                    <Table compact definition selectable stackable>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>{t('mandates:mandate.details.name', 'Name')}</Table.Cell>
                                <Table.Cell>J&SV Exaltio</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('mandates:mandate.details.address', 'Address')}</Table.Cell>
                                <Table.Cell>Postbus 217</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('mandates:mandate.details.postalCode', 'Postal code')}</Table.Cell>
                                <Table.Cell>7500AE</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('mandates:mandate.details.city', 'City')}</Table.Cell>
                                <Table.Cell>Enschede, Netherlands</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('mandates:mandate.iban', 'IBAN')}</Table.Cell>
                                <Table.Cell>NL06INGB0007273360</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('mandates:mandate.bic', 'BIC')}</Table.Cell>
                                <Table.Cell>INGBNL2A</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('mandates:mandate.details.creditorId', 'Creditor ID')}</Table.Cell>
                                <Table.Cell>NL42ZZZ657772120000</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </>
            )}
        </Container>
    );
};

export default Mandate;
