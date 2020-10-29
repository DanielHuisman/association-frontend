import React from 'react';
import {RouteComponentProps, Switch, Route} from 'react-router-dom';
import {useQuery} from '@apollo/react-hooks';
import {Container, Loader} from 'semantic-ui-react';

import {GetMemberQuery, GetMandateQueryVariables} from '../../generated/graphql';
import GetMember from '../../queries/GetMember.graphql';
import Sign from '../sign/Sign';

import Overview from './Overview';

interface IRouteParams {
    memberId: string;
}

const Member = ({match}: RouteComponentProps<IRouteParams>) => {
    const {loading, data, error} = useQuery<GetMemberQuery, GetMandateQueryVariables>(GetMember, {
        variables: {
            id: match.params.memberId
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
                    <Switch>
                        <Route exact path={`${match.path}/`} component={Overview} />
                        <Route path={`${match.path}/mandates/sign`} component={Sign} />
                    </Switch>
                </>
            )}
        </Container>
    );
};

export default Member;
