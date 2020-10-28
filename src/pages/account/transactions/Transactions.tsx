import React from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {Switch, Route, RouteComponentProps} from 'react-router-dom';
import {Header} from 'semantic-ui-react';

import List from './List';
import Details from './Details';

const Transactions = ({match}: RouteComponentProps) => {
    const {t} = useTranslation();

    return (
        <>
            <Helmet title={t('account:transactions.header', 'Transactions')} />
            <Header size="huge">{t('account:transactions.header', 'Transactions')}</Header>

            <Switch>
                <Route exact path={`${match.path}/`} component={List} />
                <Route exact path={`${match.path}/:transactionId`} component={Details} />
            </Switch>
        </>
    );
};

export default Transactions;
