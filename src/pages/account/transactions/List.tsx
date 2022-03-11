import React, {useContext} from 'react';

import {UserContext} from '../../../components/authentication/UserContext';
import {TransactionTable} from '../../../components/transactions/TransactionTable';
import {Page} from '../../../components/page/Page';
import {GetMemberTransactionsQuery} from '../../../generated/graphql';
import GetMemberTransactions from '../../../queries/GetMemberTransactions.graphql';

export const List: React.FC = () => {
    const member = useContext(UserContext);

    return (
        <Page<GetMemberTransactionsQuery> query={GetMemberTransactions} queryVariables={{id: member.id}}>
            {({data}) => {
                return (
                    <TransactionTable transactions={data.member.transactions.values} urlPrefix="/account/transactions" hideUpdatedAt />
                );
            }}
        </Page>
    );
};
