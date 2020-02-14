import React, {useEffect, useContext} from 'react';
import {useQuery} from '@apollo/react-hooks';
import {RouteComponentProps, Switch, Route} from 'react-router-dom';
import {Container, Loader} from 'semantic-ui-react';

import {UserContext} from '../../components/authentication/UserContext';
import GetMember from '../../queries/GetMember.graphql';
import {GetMember as GetMemberType, Role} from '../../types/generatedTypes';
import {hasPendingPaperMandates, hasAcceptedMandates} from '../../util';
import Sign from '../sign/Sign';

import Overview from './Overview';

interface IRouteParams {
    memberId: string;
}

const Member = ({history, match, location}: RouteComponentProps<IRouteParams>) => {
    const {loading, data, error} = useQuery<GetMemberType>(GetMember, {
        variables: {
            id: match.params.memberId
        }
    });

    if (error) {
        throw error;
    }

    const user = useContext(UserContext);

    useEffect(() => {
        if (data && data.member) {
            // Check if the member should be redirected to sign a mandate
            if (!location.pathname.includes('/mandates/') && !(user && user.role === Role.ADMIN)) {
                if (hasPendingPaperMandates(data.member)) {
                    history.push(`${match.url}/mandates/sign/paper`);
                } else if (!hasAcceptedMandates(data.member)) {
                    history.push(`${match.url}/mandates/sign`);
                }
            }
        }
    });

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
