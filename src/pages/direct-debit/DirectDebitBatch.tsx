import React from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {Link, RouteComponentProps} from 'react-router-dom';
import {useQuery} from '@apollo/react-hooks';
import {Container, Header, Loader, Table, Button} from 'semantic-ui-react';
import moment from 'moment';

import DirectDebitInstructionTable from '../../components/direct-debits/DirectDebitInstructionTable';
import {GetDirectDebitBatchQuery, GetDirectDebitBatchQueryVariables} from '../../generated/graphql';
import GetDirectDebitBatch from '../../queries/GetDirectDebitBatch.graphql';
import {formatCurrency} from '../../util';

interface IRouteParams {
    directDebitId: string;
    directDebitBatchId: string;
}

const DirectDebitBatch = ({match}: RouteComponentProps<IRouteParams>) => {
    const {t} = useTranslation();
    const {loading, data, error} = useQuery<GetDirectDebitBatchQuery, GetDirectDebitBatchQueryVariables>(GetDirectDebitBatch, {
        variables: {
            id: match.params.directDebitBatchId
        }
    });

    if (error) {
        throw error;
    }

    return (
        <Container>
            {loading && <Loader active />}

            {data && !data.directDebitBatch && <>{t('general:notFound', 'Not found')}</>}
            {data && data.directDebitBatch && (
                <>
                    <Helmet title={t('directDebits:directDebitBatch.header', 'Direct debit batch')} />
                    <Header size="huge">{t('directDebits:directDebitBatch.header', 'Direct debit batch')}</Header>

                    <Header size="large">{t('directDebits:directDebitBatch.details', 'Direct debit batch details')}</Header>
                    <Table compact definition selectable stackable>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>{t('directDebits:directDebitBatch.batchId', 'Identifier')}</Table.Cell>
                                <Table.Cell>{data.directDebitBatch.batchId}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('directDebits:directDebitBatch.sequenceType', 'Sequence type')}</Table.Cell>
                                <Table.Cell>{data.directDebitBatch.sequenceType}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('directDebits:directDebitBatch.instructionCount', 'Instructions')}</Table.Cell>
                                <Table.Cell>{data.directDebitBatch.instructionCount}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('directDebits:directDebitBatch.amount', 'Amount')}</Table.Cell>
                                <Table.Cell>{formatCurrency(data.directDebitBatch.amount)}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('directDebits:directDebitBatch.createdAt', 'Created at')}</Table.Cell>
                                <Table.Cell>{moment(data.directDebitBatch.createdAt).format('YYYY-MM-DD HH:mm')}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('directDebits:directDebitBatch.updatedAt', 'Updated at')}</Table.Cell>
                                <Table.Cell>{moment(data.directDebitBatch.updatedAt).format('YYYY-MM-DD HH:mm')}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('directDebits:directDebitBatch.directDebit', 'Direct debit')}</Table.Cell>
                                <Table.Cell>{data.directDebitBatch.directDebit.messageId}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('directDebits:directDebit.collectionDate', 'Collection date')}</Table.Cell>
                                <Table.Cell>{moment(data.directDebitBatch.directDebit.collectionDate).format('YYYY-MM-DD')}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('directDebits:directDebit.status', 'Status')}</Table.Cell>
                                <Table.Cell>{data.directDebitBatch.directDebit.status}</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                    <Button as={Link} to={`/direct-debits/${data.directDebitBatch.directDebit.id}`} color="blue">
                        {t('directDebits:directDebitBatch.viewDirectDebit', 'View direct debit')}
                    </Button>

                    <Header size="large">{t('directDebits:directDebit.intructions', 'Direct debit instructions')}</Header>
                    {data.directDebitBatch.instructions.values.length === 0 &&
                        <p>{t('directDebits:directDebit.noInstructions', 'There are no instructions.')}</p>
                    }
                    {data.directDebitBatch.instructions.values.length > 0 && (
                        <DirectDebitInstructionTable directDebitId={data.directDebitBatch.directDebit.id} batches={[data.directDebitBatch]} />
                    )}
                </>
            )}
        </Container>
    );
};

export default DirectDebitBatch;
