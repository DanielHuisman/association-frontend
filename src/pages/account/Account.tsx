import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Container, Grid} from 'semantic-ui-react';

import {AccountMenu} from '../../components/account/AccountMenu';

import {Profile} from './profile/Profile';
import {Security} from './security/Security';
import {Mandates} from './mandates/Mandates';
import {Transactions} from './transactions/Transactions';

export const Account = () => (
    <Container>
        <Grid stackable>
            <Grid.Row>
                <Grid.Column width={4}>
                    <AccountMenu />
                </Grid.Column>
                <Grid.Column width={12}>
                    <Routes>
                        <Route index element={<Navigate to="profile" />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="security" element={<Security />} />
                        <Route path="mandates/*" element={<Mandates />} />
                        <Route path="transactions/*" element={<Transactions />} />
                    </Routes>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
);
