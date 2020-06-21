import React from 'react';
import {Route, RouteProps, Redirect} from 'react-router-dom';
import {useQuery} from '@apollo/react-hooks';

import {GetProfileQuery, GetProfileQueryVariables} from '../../generated/graphql';
import GetProfile from '../../queries/GetProfile.graphql';

export const NoAuthRoute = (props: RouteProps) => {
    const {loading, data, error} = useQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfile);

    if (loading) {
        return null;
    }

    return !error && data.me ? <Redirect to="/" /> : <Route {...props} />;
};

export default NoAuthRoute;
