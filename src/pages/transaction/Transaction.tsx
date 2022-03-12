import React from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {useParams, Link} from 'react-router-dom';
import {gql, useQuery} from '@apollo/react-hooks';
import {Container, Header, Loader, Table, Button} from 'semantic-ui-react';
import moment from 'moment';

import {MembershipType} from '../../components/membership/MembershipType';
import {TransactionType} from '../../components/transactions/TransactionType';
import {GetTransactionQuery, GetTransactionQueryVariables} from '../../generated/graphql';
import GetTransaction from '../../queries/GetTransaction.graphql';
import {formatCurrency} from '../../util';

type Params = {
    transactionId: string;
};

export const Transaction = () => {
    const params = useParams<Params>();
    const {t} = useTranslation();

    const {loading, data, error} = useQuery<GetTransactionQuery, GetTransactionQueryVariables>(gql(GetTransaction), {
        variables: {
            id: params.transactionId
        }
    });

    if (error) {
        throw error;
    }

    return (
        <Container>
            {loading && <Loader active />}

            {data && !data.transaction && <>{t('general:notFound.text', 'Not found')}</>}
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
                                <Table.Cell>{t('members:membership.type', 'Membership type')}</Table.Cell>
                                <Table.Cell><MembershipType membership={data.transaction.member.latestMembership} /></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('members:membership.startedAt', 'Start of membership')}</Table.Cell>
                                <Table.Cell>{moment(data.transaction.member.latestMembership.startedAt).format('YYYY-MM-DD')}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('members:membership.endedAt', 'End of membership')}</Table.Cell>
                                <Table.Cell>
                                    {data.transaction.member.latestMembership.endedAt ?
                                        moment(data.transaction.member.latestMembership.endedAt).format('YYYY-MM-DD') :
                                        <i>{t('members:membership.endedAtNone', 'Still a member')}</i>
                                    }
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                    <Button as={Link} to={`/members/${data.transaction.member.id}`} color="blue">
                        {t('transactions:transaction.viewMember', 'View member')}
                    </Button>

                    <Header size="large">{t('directDebits:directDebitInstruction.details', 'Direct debit instruction details')}</Header>
                    {!data.transaction.instruction && <p>{t('transactions:transaction:noInstruction', 'This transaction is not linked to a direct debit instruction.')}</p>}
                    {data.transaction.instruction && (
                        <>
                            <Table compact definition selectable stackable>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>{t('directDebits:directDebitInstruction.instructionId', 'Identifier')}</Table.Cell>
                                        <Table.Cell>{data.transaction.instruction.instructionId}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>{t('directDebits:directDebitInstruction.description', 'Description')}</Table.Cell>
                                        <Table.Cell>{data.transaction.instruction.description}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>{t('directDebits:directDebitInstruction.amount', 'Amount')}</Table.Cell>
                                        <Table.Cell>{formatCurrency(data.transaction.instruction.amount)}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>{t('directDebits:directDebitInstruction.batch', 'Batch')}</Table.Cell>
                                        <Table.Cell>{data.transaction.instruction.batch.batchId}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>{t('directDebits:directDebitBatch.sequenceType', 'Sequence type')}</Table.Cell>
                                        <Table.Cell>{data.transaction.instruction.batch.sequenceType}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>{t('directDebits:directDebitBatch.directDebit', 'Direct debit')}</Table.Cell>
                                        <Table.Cell>{data.transaction.instruction.batch.directDebit.messageId}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>{t('directDebits:directDebit.collectionDate', 'Collection date')}</Table.Cell>
                                        <Table.Cell>{moment(data.transaction.instruction.batch.directDebit.collectionDate).format('YYYY-MM-DD')}</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                            <Button
                                as={Link}
                                to={`/direct-debits/${data.transaction.instruction.batch.directDebit.id}/instructions/${data.transaction.instruction.id}`}
                                color="blue"
                            >
                                {t('transactions:transaction.viewDirectDebitInstruction', 'View direct debit instruction')}
                            </Button>
                            <Button
                                as={Link}
                                to={`/direct-debits/${data.transaction.instruction.batch.directDebit.id}/batches/${data.transaction.instruction.batch.id}`}
                                color="blue"
                            >
                                {t('transactions:transaction.viewDirectDebitBatch', 'View direct debit batch')}
                            </Button>
                            <Button
                                as={Link}
                                to={`/direct-debits/${data.transaction.instruction.batch.directDebit.id}`}
                                color="blue"
                            >
                                {t('transactions:transaction.viewDirectDebit', 'View direct debit')}
                            </Button>
                        </>
                    )}
                </>
            )}
        </Container>
    );
};

export default Transaction;
