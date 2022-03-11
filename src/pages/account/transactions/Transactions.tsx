import React from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {Route, Routes} from 'react-router-dom';
import {Header} from 'semantic-ui-react';

import {List} from './List';
import {Details} from './Details';

export const Transactions: React.FC = () => {
    const {t} = useTranslation();

    return (
        <>
            <Helmet title={t('account:transactions.header', 'Transactions')} />
            <Header size="huge">{t('account:transactions.header', 'Transactions')}</Header>

            <Routes>
                <Route index element={<List />} />
                <Route path=":transactionId" element={<Details />} />
            </Routes>
        </>
    );
};
