import React from 'react';
import {Route, RouteProps, Redirect} from 'react-router-dom';
import {useQuery} from '@apollo/react-hooks';

import {GetProfileQuery, GetProfileQueryVariables} from '../../generated/graphql';
import GetProfile from '../../queries/GetProfile.graphql';

export const AuthRoute = (props: RouteProps) => {
    const {loading, data, error} = useQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfile);

    if (loading) {
        return null;
    }

    return !error && data.me ? <Route {...props} /> : <Redirect to="/login" />;
};

export default AuthRoute;
