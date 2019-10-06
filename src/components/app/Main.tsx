import React from 'react';
import ErrorBoundary from 'react-error-boundary';
import {Switch, Route} from 'react-router-dom';

import {AuthRoute, NoAuthRoute} from '../../components/authentication';
import ErrorPage from '../../pages/error/Error';
import Login from '../../pages/auth/login/Login';
import Logout from '../../pages/auth/logout/Logout';
import OAuth from '../../pages/auth/oauth/OAuth';

const Main = () => {
    return (
        <main>
            <ErrorBoundary FallbackComponent={ErrorPage}>
                <Switch>
                    {/* <Route exact path="/" component={Home} /> */}

                    <NoAuthRoute exact path="/login" component={Login} />
                    <Route exact path="/oauth/:providerType" component={OAuth} />
                    <AuthRoute exact path="/logout" component={Logout} />
                </Switch>
            </ErrorBoundary>
        </main>
    );
};

export default Main;
