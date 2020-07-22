import React from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {RouteComponentProps} from 'react-router-dom';
import {useQuery} from '@apollo/react-hooks';
import {Container, Header, Loader, Table, Button} from 'semantic-ui-react';
import moment from 'moment';

import DirectDebitBatchTable from '../../components/direct-debits/DirectDebitBatchTable';
import DirectDebitInstructionTable from '../../components/direct-debits/DirectDebitInstructionTable';
import DirectDebitWarningTable from '../../components/direct-debits/DirectDebitWarningTable';
import {GetDirectDebitQuery, GetDirectDebitBatchQueryVariables} from '../../generated/graphql';
import GetDirectDebit from '../../queries/GetDirectDebit.graphql';
import {formatCurrency} from '../../util';

interface IRouteParams {
    directDebitId: string;
}

const DirectDebit = ({match}: RouteComponentProps<IRouteParams>) => {
    const {t} = useTranslation();
    const {loading, data, error} = useQuery<GetDirectDebitQuery, GetDirectDebitBatchQueryVariables>(GetDirectDebit, {
        variables: {
            id: match.params.directDebitId
        }
    });

    if (error) {
        throw error;
    }

    return (
        <Container>
            {loading && <Loader active />}

            {data && !data.directDebit && <>{t('general:notFound', 'Not found')}</>}
            {data && data.directDebit && (
                <>
                    <Helmet title={t('directDebits:directDebit.header', 'Direct debit')} />
                    <Header size="huge">{t('directDebits:directDebit.header', 'Direct debit')}</Header>

                    <Header size="large">{t('directDebits:directDebit.details', 'Direct debit details')}</Header>
                    <Table compact definition selectable stackable>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>{t('directDebits:directDebit.messageId', 'Identifier')}</Table.Cell>
                                <Table.Cell>{data.directDebit.messageId}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('directDebits:directDebit.collectionDate', 'Collection date')}</Table.Cell>
                                <Table.Cell>{moment(data.directDebit.collectionDate).format('YYYY-MM-DD')}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('directDebits:directDebit.status', 'Status')}</Table.Cell>
                                <Table.Cell>{data.directDebit.status}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('directDebits:directDebit.instructionCount', 'Instructions')}</Table.Cell>
                                <Table.Cell>{data.directDebit.instructionCount}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('directDebits:directDebit.amount', 'Amount')}</Table.Cell>
                                <Table.Cell>{formatCurrency(data.directDebit.amount)}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('directDebits:directDebit.createdAt', 'Created at')}</Table.Cell>
                                <Table.Cell>{moment(data.directDebit.createdAt).format('YYYY-MM-DD HH:mm')}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>{t('directDebits:directDebit.updatedAt', 'Updated at')}</Table.Cell>
                                <Table.Cell>{moment(data.directDebit.updatedAt).format('YYYY-MM-DD HH:mm')}</Table.Cell>
                            </Table.Row>

                            {data.directDebit.file && (
                                <Table.Row>
                                    <Table.Cell>{t('directDebits:directDebit.file', 'XML file')}</Table.Cell>
                                    <Table.Cell>
                                        <p>{t('directDebits:directDebit.fileInfo', 'This file should be uploaded to the bank for processing.')}</p>
                                        <Button as="a" href={data.directDebit.file.url} target="file" color="blue" size="tiny">
                                            {t('general:general.download', 'Download')}
                                        </Button>
                                    </Table.Cell>
                                </Table.Row>
                            )}
                        </Table.Body>
                    </Table>

                    <Header size="large">{t('directDebits:directDebit.batches', 'Direct debit batches')}</Header>
                    {data.directDebit.batches.values.length === 0 && <p>{t('directDebits:directDebit.noBatches', 'There are no batches.')}</p>}
                    {data.directDebit.batches.values.length > 0 && (
                        <DirectDebitBatchTable directDebitId={data.directDebit.id} batches={data.directDebit.batches.values} />
                    )}

                    <Header size="large">{t('directDebits:directDebit.intructions', 'Direct debit instructions')}</Header>
                    {data.directDebit.batches.values.length === 0 && <p>{t('directDebits:directDebit.noInstructions', 'There are no instructions.')}</p>}
                    {data.directDebit.batches.values.length > 0 && (
                        <DirectDebitInstructionTable directDebitId={data.directDebit.id} batches={data.directDebit.batches.values} showBatch />
                    )}

                    <Header size="large">{t('directDebits:directDebit.warnings', 'Direct debit warnings')}</Header>
                    {data.directDebit.warnings.values.length === 0 && <p>{t('directDebits:directDebit.noWarnings', 'There are no warnings.')}</p>}
                    {data.directDebit.warnings.values.length > 0 && (
                        <DirectDebitWarningTable warnings={data.directDebit.warnings.values} />
                    )}
                </>
            )}
        </Container>
    );
};

export default DirectDebit;
