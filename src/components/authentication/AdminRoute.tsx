import React from 'react';
import {Route, RouteProps, Redirect} from 'react-router-dom';
import {useQuery} from '@apollo/react-hooks';

import {GetProfileQuery, GetProfileQueryVariables, Role} from '../../generated/graphql';
import GetProfile from '../../queries/GetProfile.graphql';

export const AdminRoute = (props: RouteProps) => {
    const {loading, data, error} = useQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfile);

    if (loading) {
        return null;
    }

    return !error && data.me && data.me.role === Role.ADMIN ? <Route {...props} /> : <Redirect to="/unauthorized" />;
};

export default AdminRoute;
