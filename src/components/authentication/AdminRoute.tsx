import React from 'react';
import {Query} from 'react-apollo';
import {Route, RouteProps, Redirect} from 'react-router-dom';

import GetProfile from '../../queries/GetProfile.graphql';
import {GetProfile as GetProfileType, Role} from '../../types/generatedTypes';

export const AdminRoute = (props: RouteProps) => (
    <Query<GetProfileType> query={GetProfile}>
        {({loading, data, error}) => {
            if (loading) {
                return null;
            }

            return !error && data.me && data.me.role === Role.ADMIN ? <Route {...props} /> : <Redirect to="/unauthorized" />;
        }}
    </Query>
);

export default AdminRoute;
