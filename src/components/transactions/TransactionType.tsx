import React from 'react';
import {useTranslation} from 'react-i18next';

import {TransactionFragment} from '../../generated/graphql';

export interface TransactionTypeProps {
    transaction: TransactionFragment;
}

export const TransactionType: React.FC<TransactionTypeProps> = ({transaction}) => {
    const {t} = useTranslation();

    return (
        <>
            {transaction.__typename === 'MembershipFeeTransaction' ?
                t('transactions:transaction.types.membershipFee', 'Membership fee') :
                t('transactions:transaction.types.other', 'Other')}
        </>
    );
};
