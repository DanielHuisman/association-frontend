import React from 'react';
import {Query} from 'react-apollo';
import {Route, RouteProps, Redirect} from 'react-router-dom';

import GetProfile from '../../queries/GetProfile.graphql';
import {GetProfile as GetProfileType} from '../../types/generatedTypes';

export const NoAuthRoute = (props: RouteProps) => (
    <Query<GetProfileType> query={GetProfile}>
        {({loading, data, error}) => {
            if (loading) {
                return null;
            }

            return !error && data.me ? <Redirect to="/" /> : <Route {...props} />;
        }}
    </Query>
);

export default NoAuthRoute;
