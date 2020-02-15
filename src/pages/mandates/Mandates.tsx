import React from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {Switch, Route, NavLink} from 'react-router-dom';
import {Container, Header, Menu} from 'semantic-ui-react';

import List from './List';
import ReviewList from './ReviewList';

const Mandates = () => {
    const {t} = useTranslation();

    return (
        <Container>
            <Helmet title={t('mandates:mandates.header', 'Mandates')} />
            <Header size="huge">{t('mandates:mandates.header', 'Mandates')}</Header>

            <Menu>
                <Menu.Item as={NavLink} exact to="/mandates">
                    {t('mandates:mandates.menu.all', 'All')}
                </Menu.Item>
                <Menu.Item as={NavLink} exact to="/mandates/review">
                    {t('mandates:mandates.menu.review', 'Ready for review')}
                </Menu.Item>
            </Menu>

            <Switch>
                <Route exact path="/mandates" component={List} />
                <Route path="/mandates/review" component={ReviewList} />
            </Switch>
        </Container>
    );
};

export default Mandates;
