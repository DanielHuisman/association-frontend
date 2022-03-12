import React from 'react';
import {useTranslation} from 'react-i18next';
import {useParams, Link} from 'react-router-dom';
import {Header, Table, Button, Icon, Message} from 'semantic-ui-react';
import moment from 'moment';
import {gql} from '@apollo/react-hooks';

import {TransactionType} from '../../../components/transactions/TransactionType';
import {Page} from '../../../components/page/Page';
import {GetMemberTransactionQuery} from '../../../generated/graphql';
import GetMemberTransaction from '../../../queries/GetMemberTransaction.graphql';
import {formatCurrency} from '../../../util';

type Params = {
    transactionId: string;
};

export const Details: React.FC = () => {
    const params = useParams<Params>();
    const {t} = useTranslation();

    return (
        <Page<GetMemberTransactionQuery> query={gql(GetMemberTransaction)} queryVariables={{id: params.transactionId}}>
            {({data}) => {
                return (
                    <>
                        <Button as={Link} to="/account/transactions" labelPosition="left" basic icon>
                            <Icon name="arrow left" />
                            {t('general:backToList', 'Back to list')}
                        </Button>

                        {data && !data.transaction && <Message error>{t('general:notFound.text', 'Not found')}</Message>}
                        {data && data.transaction && (
                            <>
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
                            </>
                        )}
                    </>
                );
            }}
        </Page>
    );
};
