import React from 'react';
import {Navigate} from 'react-router-dom';
import {useQuery} from '@apollo/react-hooks';

import {GetProfileQuery, GetProfileQueryVariables} from '../../generated/graphql';
import GetProfile from '../../queries/GetProfile.graphql';

export const Auth: React.FC = ({children}) => {
    const {loading, data, error} = useQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfile);

    if (loading) {
        return null;
    }

    return !error && data.me ? <>{children}</> : <Navigate to="/login" />;
};