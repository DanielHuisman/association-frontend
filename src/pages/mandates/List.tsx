import React from 'react';
import {gql, useQuery} from '@apollo/react-hooks';
import {Loader} from 'semantic-ui-react';

import {MandateTable} from '../../components/mandates/MandateTable';
import {GetMandatesQuery, GetMandatesQueryVariables} from '../../generated/graphql';
import GetMandates from '../../queries/GetMandates.graphql';

export const List: React.FC = () => {
    const {loading, data, error} = useQuery<GetMandatesQuery, GetMandatesQueryVariables>(gql(GetMandates));

    if (error) {
        throw error;
    }

    return (
        <>
            {loading && <Loader active />}

            {data && <MandateTable mandates={data.mandates.values} />}
        </>
    );
};
