import React from 'react';
import {useParams, Route, Routes} from 'react-router-dom';
import {gql, useQuery} from '@apollo/react-hooks';
import {Container, Loader} from 'semantic-ui-react';

import {GetMemberQuery, GetMandateQueryVariables} from '../../generated/graphql';
import GetMember from '../../queries/GetMember.graphql';
import {Sign} from '../sign/Sign';

import {Overview} from './Overview';

type Params = {
    memberId: string;
};

export const Member: React.FC = () => {
    const params = useParams<Params>();

    const {loading, data, error} = useQuery<GetMemberQuery, GetMandateQueryVariables>(gql(GetMember), {
        variables: {
            id: params.memberId
        }
    });

    if (error) {
        throw error;
    }

    return (
        <Container>
            {loading && <Loader active />}

            {data && !data.member && <>Not found</>}
            {data && data.member && (
                <>
                    <Routes>
                        <Route index element={<Overview />} />
                        <Route path="mandates/sign" element={<Sign />} />
                    </Routes>
                </>
            )}
        </Container>
    );
};
