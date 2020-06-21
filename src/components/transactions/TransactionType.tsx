import React from 'react';
import {useTranslation} from 'react-i18next';

import {TransactionFragment} from '../../generated/graphql';

interface IProps {
    transaction: TransactionFragment;
}

const TransactionType = ({transaction}: IProps) => {
    const {t} = useTranslation();

    return (
        <>
            {transaction.__typename === 'MembershipFeeTransaction' ?
                t('transactions:transaction.types.membershipFee', 'Membership fee') :
                t('transactions:transaction.types.other', 'Other')}
        </>
    );
};

export default TransactionType;
