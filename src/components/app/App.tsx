import {default as i18n} from 'i18next';
import React, {useEffect, useState} from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import {Helmet} from 'react-helmet';
import {useLocation, useNavigate} from 'react-router-dom';
import {gql, useQuery} from '@apollo/react-hooks';

import {GetProfileQuery, GetProfileQueryVariables} from '../../generated/graphql';
import GetProfile from '../../queries/GetProfile.graphql';
import {UserProvider} from '../authentication/UserContext';
import {Sidebar} from '../navigation/Sidebar';

import {Header} from './Header';
import {Main} from './Main';
import {Footer} from './Footer';

export const App: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [isSidebarVisible, setSidebarVisible] = useState(false);
    const {loading, data, error} = useQuery<GetProfileQuery, GetProfileQueryVariables>(gql(GetProfile));

    const user = loading || error || !data ? null : data.me;

    useEffect(() => {
        if (user) {
            // Change user ID for Matomo tracking
            // matomo.push(['setUserId', user.id]);

            // Check if the user has to sign a mandate
            // if (!user.hasMandate && !(location.pathname.startsWith('/sign') || location.pathname.startsWith('/account/profile'))) {
            //     history.push(`/sign`);
            // }

            // Check if the user has pending paper mandates
            if (user.hasPendingPaperMandates && !location.pathname.startsWith('/sign/paper')) {
                navigate(`/sign/paper`);
            }

            // Change user language if needed
            if (i18n.language !== user.language.toLowerCase()) {
                i18n.changeLanguage(user.language.toLowerCase());
            }
        }
    }, [location.pathname, user, navigate]);

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
