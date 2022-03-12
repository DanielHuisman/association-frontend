import React from 'react';
import {Navigate} from 'react-router-dom';
import {gql, useQuery} from '@apollo/react-hooks';

import {GetProfileQuery, GetProfileQueryVariables} from '../../generated/graphql';
import GetProfile from '../../queries/GetProfile.graphql';

export const Admin: React.FC = ({children}) => {
    const {loading, data, error} = useQuery<GetProfileQuery, GetProfileQueryVariables>(gql(GetProfile));

    if (loading) {
        return null;
    }

    return !error && data && data.me && data.me.isAdmin ? <>{children}</> : <Navigate to="/unauthorized" />;
};
