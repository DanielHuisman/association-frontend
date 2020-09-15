import React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {Container, Grid} from 'semantic-ui-react';

import AccountMenu from '../../components/account/AccountMenu';
import {AuthRoute} from '../../components/authentication';

import Profile from './profile/Profile';
import Security from './security/Security';

const Account = ({match}: RouteComponentProps) => (
    <Container>
        <Grid stackable>
            <Grid.Row>
                <Grid.Column width={4}>
                    <AccountMenu />
                </Grid.Column>
                <Grid.Column width={12}>
                    <AuthRoute exact path={`${match.path}/profile`} component={Profile} />
                    <AuthRoute exact path={`${match.path}/security`} component={Security} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
);

export default Account;
