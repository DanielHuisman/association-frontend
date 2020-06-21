import React, {useEffect, useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {RouteComponentProps, Switch, Route} from 'react-router-dom';
import {useQuery} from '@apollo/react-hooks';
import {Container, Loader} from 'semantic-ui-react';

import {UserContext} from '../../components/authentication/UserContext';
import {GetMemberQuery, GetMandateQueryVariables, Role} from '../../generated/graphql';
import GetMember from '../../queries/GetMember.graphql';
import {hasPendingPaperMandates} from '../../util';
import Sign from '../sign/Sign';

import Overview from './Overview';

interface IRouteParams {
    memberId: string;
}

const Member = ({history, match, location}: RouteComponentProps<IRouteParams>) => {
    const {loading, data, error} = useQuery<GetMemberQuery, GetMandateQueryVariables>(GetMember, {
        variables: {
            id: match.params.memberId
        }
    });

    if (error) {
        throw error;
    }

    const user = useContext(UserContext);
    const {i18n} = useTranslation();

    useEffect(() => {
        if (data && data.member) {
            // Check if the member should be redirected to sign a mandate
            if (!user || user.role !== Role.ADMIN) {
                if (hasPendingPaperMandates(data.member) && !location.pathname.includes('/mandates/sign/paper')) {
                    history.push(`${match.url}/mandates/sign/paper`);
                }

                // Change user language if needed
                if (i18n.language !== data.member.language.toLowerCase()) {
                    i18n.changeLanguage(data.member.language.toLowerCase());
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
