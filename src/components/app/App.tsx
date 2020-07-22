import React, {useState} from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import {Helmet} from 'react-helmet';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {useQuery} from '@apollo/react-hooks';

import {GetProfileQuery, GetProfileQueryVariables} from '../../generated/graphql';
import GetProfile from '../../queries/GetProfile.graphql';
import {UserProvider} from '../authentication/UserContext';
import Sidebar from '../navigation/Sidebar';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const App = ({location}: RouteComponentProps) => {
    const [isSidebarVisible, setSidebarVisible] = useState(false);
    const {loading, data, error} = useQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfile);

    const user = loading || error ? null : data.me;

    // useEffect(() => {
    //     if (user) {
    //         // Change user ID for Matomo tracking
    //         matomo.push(['setUserId', user.id]);

    //         // Change language to user preference
    //         // if (i18n.language !== user.language.toLowerCase()) {
    //         //     i18n.changeLanguage(user.language.toLowerCase());
    //         // }
    //     }
    // }, [user]);

    return (
        <ErrorBoundary fallback={<div />}>
            <UserProvider value={user}>
                <Sidebar user={user} visible={isSidebarVisible} onHide={() => setSidebarVisible(false)}>
                    <Helmet titleTemplate="%s | J&SV Exaltio" defaultTitle="J&SV Exaltio" />

                    <Header user={user} onSidebar={() => setSidebarVisible(true)} />
                    <Main jumbotron={location.pathname === '/'} />
                    <Footer />
                </Sidebar>
            </UserProvider>
        </ErrorBoundary>
    );
};

export default withRouter(App);
