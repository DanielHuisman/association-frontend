import React from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {Switch, Route, RouteComponentProps} from 'react-router-dom';
import {Container, Header} from 'semantic-ui-react';

import Intro from './Intro';
import Digital from './Digital';
import Paper from './Paper';

const Sign = ({match}: RouteComponentProps) => {
    const {t} = useTranslation();

    return (
        <Container>
            <Helmet title={t('mandates:sign.header', 'Sign mandate')} />
            <Header size="huge">{t('mandates:sign.header', 'Sign mandate')}</Header>

            <Switch>
                <Route exact path={`${match.path}/`} component={Intro} />
                <Route exact path={`${match.path}/digital`} component={Digital} />
                <Route exact path={`${match.path}/paper`} component={Paper} />
            </Switch>
        </Container>
    );
};

export default Sign;
