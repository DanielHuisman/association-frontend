import React, {useState} from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import {Helmet} from 'react-helmet';
import {useQuery} from '@apollo/react-hooks';

import {GetProfileQuery, GetProfileQueryVariables} from '../../generated/graphql';
import GetProfile from '../../queries/GetProfile.graphql';
import {UserProvider} from '../authentication/UserContext';
import Sidebar from '../navigation/Sidebar';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const App = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(false);
    const {loading, data, error} = useQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfile);

    const user = loading || error ? null : data.me;
    return (
        <ErrorBoundary fallback={<div />}>
            <UserProvider value={user}>
                <Sidebar user={user} visible={isSidebarVisible} onHide={() => setSidebarVisible(false)}>
                    <Helmet titleTemplate="%s | J&SV Exaltio" defaultTitle="J&SV Exaltio" />

                    <Header user={user} onSidebar={() => setSidebarVisible(true)} />
                    <Main />
                    <Footer />
                </Sidebar>
            </UserProvider>
        </ErrorBoundary>
    );
};

export default App;
