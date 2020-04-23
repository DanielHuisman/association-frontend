import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {Link, RouteComponentProps} from 'react-router-dom';
import {Container, Header, Loader, Table, Button} from 'semantic-ui-react';
import moment from 'moment';

import TransactionType from '../../components/transactions/TransactionType';
import GetTransaction from '../../queries/GetTransaction.graphql';
import {GetTransaction as GetTransactionType} from '../../types/generatedTypes';
import {formatCurrency} from '../../util';

interface IRouteParams {
    transactionId: string;
}

const Transaction = ({match}: RouteComponentProps<IRouteParams>) => {
    const {t} = useTranslation();
    const {loading, data, error} = useQuery<GetTransactionType>(GetTransaction, {
        variables: {
            id: match.params.transactionId
        }
    });

    if (error) {
        throw error;
    }

    return (
        <Container>
            {loading && <Loader active />}

            {data && !data.transaction && <>{t('general:notFound', 'Not found')}</>}
            {data && data.transaction && (
                <>
                    <Helmet title={t('transactions:transaction.header', 'Transaction')} />
                    <Header size="huge">{t('transactions:transaction.header', 'Transaction')}</Header>

                    <Header size="large">{t('transactions:transaction.details', 'Transaction details')}</Header>
                    <Table compact definition selectable stackable>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>{t('transactions:transaction.type', 'Type')}</Table.Cell>
                                <Table.Cell><TransactionType transaction={data.transaction} /></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('transactions:transaction.description', 'Description')}</Table.Cell>
                                <Table.Cell>{data.transaction.description}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('transactions:transaction.amount', 'Amount')}</Table.Cell>
                                <Table.Cell>{formatCurrency(data.transaction.amount)}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('transactions:transaction.status', 'Status')}</Table.Cell>
                                <Table.Cell>-</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('transactions:transaction.createdAt', 'Created at')}</Table.Cell>
                                <Table.Cell>{moment(data.transaction.createdAt).format('YYYY-MM-DD HH:mm')}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('transactions:transaction.updatedAt', 'Updated at')}</Table.Cell>
                                <Table.Cell>{moment(data.transaction.updatedAt).format('YYYY-MM-DD HH:mm')}</Table.Cell>
                            </Table.Row>
                            {data.transaction.__typename === 'MembershipFeeTransaction' && (
                                <>
                                    <Table.Row>
                                        <Table.Cell>{t('transactions:transaction.membershipFee.year', 'Membership fee year')}</Table.Cell>
                                        <Table.Cell>{data.transaction.year}-{data.transaction.year + 1}</Table.Cell>
                                    </Table.Row>
                                </>
                            )}
                        </Table.Body>
                    </Table>

                    <Header size="large">{t('members:member.details', 'Member details')}</Header>
                    <Table compact definition selectable stackable>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>{t('members:member.name', 'Name')}</Table.Cell>
                                <Table.Cell>{data.transaction.member.firstName} {data.transaction.member.lastName}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('members:member.startOfMembership', 'Start of membership')}</Table.Cell>
                                <Table.Cell>{moment(data.transaction.member.startOfMembership).format('YYYY-MM-DD')}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('members:member.endOfMembership', 'End of membership')}</Table.Cell>
                                <Table.Cell>
                                    {data.transaction.member.endOfMembership ?
                                        moment(data.transaction.member.endOfMembership).format('YYYY-MM-DD') :
                                        <i>{t('members:member.endOfMembershipNone', 'Still a member')}</i>
                                    }
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                    <Button as={Link} to={`/members/${data.transaction.member.id}`} color="blue">
                        {t('transactions:transaction.viewMember', 'View member')}
                    </Button>
                </>
            )}
        </Container>
    );
};

export default Transaction;
