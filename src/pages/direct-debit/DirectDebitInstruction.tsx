import React from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {Link, RouteComponentProps} from 'react-router-dom';
import {useQuery} from '@apollo/react-hooks';
import {Container, Header, Loader, Table, Button} from 'semantic-ui-react';
import moment from 'moment';

import TransactionTable from '../../components/transactions/TransactionTable';
import {GetDirectDebitInstructionQuery, GetDirectDebitInstructionQueryVariables} from '../../generated/graphql';
import GetDirectDebitInstruction from '../../queries/GetDirectDebitInstruction.graphql';
import {formatCurrency} from '../../util';

interface IRouteParams {
    directDebitId: string;
    directDebitInstructionId: string;
}

const DirectDebitInstruction = ({match}: RouteComponentProps<IRouteParams>) => {
    const {t} = useTranslation();
    const {loading, data, error} = useQuery<GetDirectDebitInstructionQuery, GetDirectDebitInstructionQueryVariables>(GetDirectDebitInstruction, {
        variables: {
            id: match.params.directDebitInstructionId
        }
    });

    if (error) {
        throw error;
    }

    return (
        <Container>
            {loading && <Loader active />}

            {data && !data.directDebitInstruction && <>{t('general:notFound', 'Not found')}</>}
            {data && data.directDebitInstruction && (
                <>
                    <Helmet title={t('directDebits:directDebitInstruction.header', 'Direct debit instruction')} />
                    <Header size="huge">{t('directDebits:directDebitInstruction.header', 'Direct debit instruction')}</Header>

                    <Header size="large">{t('directDebits:directDebitInstruction.details', 'Direct debit instruction details')}</Header>
                    <Table compact definition selectable stackable>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>{t('directDebits:directDebitInstruction.instructionId', 'Identifier')}</Table.Cell>
                                <Table.Cell>{data.directDebitInstruction.instructionId}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('directDebits:directDebitInstruction.description', 'Description')}</Table.Cell>
                                <Table.Cell>{data.directDebitInstruction.description}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('directDebits:directDebitInstruction.amount', 'Amount')}</Table.Cell>
                                <Table.Cell>{formatCurrency(data.directDebitInstruction.amount)}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('directDebits:directDebitInstruction.createdAt', 'Created at')}</Table.Cell>
                                <Table.Cell>{moment(data.directDebitInstruction.createdAt).format('YYYY-MM-DD HH:mm')}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('directDebits:directDebitInstruction.updatedAt', 'Updated at')}</Table.Cell>
                                <Table.Cell>{moment(data.directDebitInstruction.updatedAt).format('YYYY-MM-DD HH:mm')}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('directDebits:directDebitInstruction.batch', 'Batch')}</Table.Cell>
                                <Table.Cell>{data.directDebitInstruction.batch.batchId}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('directDebits:directDebitBatch.sequenceType', 'Sequence type')}</Table.Cell>
                                <Table.Cell>{data.directDebitInstruction.batch.sequenceType}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('directDebits:directDebitBatch.directDebit', 'Direct debit')}</Table.Cell>
                                <Table.Cell>{data.directDebitInstruction.batch.directDebit.messageId}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('directDebits:directDebit.collectionDate', 'Collection date')}</Table.Cell>
                                <Table.Cell>{moment(data.directDebitInstruction.batch.directDebit.collectionDate).format('YYYY-MM-DD')}</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                    <Button
                        as={Link}
                        to={`/direct-debits/${data.directDebitInstruction.batch.directDebit.id}/batches/${data.directDebitInstruction.batch.id}`}
                        color="blue"
                    >
                        {t('directDebits:directDebitInstruction.viewDirectDebitBatch', 'View direct debit batch')}
                    </Button>
                    <Button
                        as={Link}
                        to={`/direct-debits/${data.directDebitInstruction.batch.directDebit.id}`}
                        color="blue"
                    >
                        {t('directDebits:directDebitInstruction.viewDirectDebit', 'View direct debit')}
                    </Button>

                    <Header size="large">{t('mandates:mandate.details.mandate', 'Mandate details')}</Header>
                    <Table compact definition selectable stackable>
                        <Table.Body>
                        <   Table.Row>
                                <Table.Cell>{t('mandates:mandate.mandateId', 'Identifier')}</Table.Cell>
                                <Table.Cell>{data.directDebitInstruction.mandate.mandateId}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('mandates:mandate.status', 'Status')}</Table.Cell>
                                <Table.Cell>{data.directDebitInstruction.mandate.status}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('mandates:mandate.details.name', 'Name')}</Table.Cell>
                                <Table.Cell>
                                    {data.directDebitInstruction.mandate.member.initials} {data.directDebitInstruction.mandate.member.lastName}
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('mandates:mandate.iban', 'IBAN')}</Table.Cell>
                                <Table.Cell>{data.directDebitInstruction.mandate.iban}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('mandates:mandate.bic', 'BIC')}</Table.Cell>
                                <Table.Cell>{data.directDebitInstruction.mandate.bic}</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                    <Button as={Link} to={`/mandates/${data.directDebitInstruction.mandate.id}`} color="blue">
                        {t('directDebits:directDebitInstruction.viewMandate', 'View mandate')}
                    </Button>
                    <Button as={Link} to={`/members/${data.directDebitInstruction.mandate.member.id}`} color="blue">
                        {t('directDebits:directDebitInstruction.viewMember', 'View member')}
                    </Button>

                    <Header size="large">{t('directDebits:directDebitInstruction.transactions', 'Transactions')}</Header>
                    {data.directDebitInstruction.transactions.length === 0 && (
                        <p>{t('directDebits:directDebitInstruction.noTransactions', 'There are no transactions.')}</p>
                    )}
                    {data.directDebitInstruction.transactions.length > 0 && (
                        <TransactionTable transactions={data.directDebitInstruction.transactions} />
                    )}
                </>
            )}
        </Container>
    );
};

export default DirectDebitInstruction;
