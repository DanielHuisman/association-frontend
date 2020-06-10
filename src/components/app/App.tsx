import React, {useState} from 'react';
import {Query} from 'react-apollo';
import {ErrorBoundary} from 'react-error-boundary';
import {Helmet} from 'react-helmet';

import GetProfile from '../../queries/GetProfile.graphql';
import {GetProfile as GetProfileType} from '../../types/generatedTypes';
import {UserProvider} from '../authentication/UserContext';
import Sidebar from '../navigation/Sidebar';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const App = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    return (
        <ErrorBoundary fallback={<div />}>
            <Query<GetProfileType> query={GetProfile}>
                {({loading, data, error}) => {
                    const user = loading || error ? null : data.me;

                    return (
                        <UserProvider value={user}>
                            <Sidebar user={user} visible={isSidebarVisible} onHide={() => setSidebarVisible(false)}>
                                <Helmet titleTemplate="%s | J&SV Exaltio" defaultTitle="J&SV Exaltio" />

                                <Header user={user} onSidebar={() => setSidebarVisible(true)} />
                                <Main />
                                <Footer />
                            </Sidebar>
                        </UserProvider>
                    );
                }}
            </Query>
        </ErrorBoundary>
    );
};

export default App;
