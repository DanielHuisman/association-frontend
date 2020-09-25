import React from 'react';
import {Switch, Redirect, RouteComponentProps} from 'react-router-dom';
import {Container, Grid} from 'semantic-ui-react';

import AccountMenu from '../../components/account/AccountMenu';
import {AuthRoute} from '../../components/authentication';

import Profile from './profile/Profile';
import Security from './security/Security';
import Mandates from './mandates/Mandates';

const Account = ({match}: RouteComponentProps) => (
    <Container>
        <Grid stackable>
            <Grid.Row>
                <Grid.Column width={4}>
                    <AccountMenu />
                </Grid.Column>
                <Grid.Column width={12}>
                    <Switch>
                        <AuthRoute exact path={`${match.path}/profile`} component={Profile} />
                        <AuthRoute exact path={`${match.path}/security`} component={Security} />
                        <AuthRoute exact path={`${match.path}/mandates`} component={Mandates} />
                        <Redirect exact path={`${match.path}/`} to={`${match.path}/profile`} />
                    </Switch>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
);

export default Account;
