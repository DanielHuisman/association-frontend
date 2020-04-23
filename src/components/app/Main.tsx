import React from 'react';
import ErrorBoundary from 'react-error-boundary';
import {Switch, Route} from 'react-router-dom';

import {AuthRoute, NoAuthRoute, AdminRoute} from '../../components/authentication';
import ErrorPage from '../../pages/error/Error';
import Login from '../../pages/auth/login/Login';
import Logout from '../../pages/auth/logout/Logout';
import OAuth from '../../pages/auth/oauth/OAuth';
import Users from '../../pages/users/Users';
import User from '../../pages/user/User';
import Members from '../../pages/members/Members';
import Member from '../../pages/member/Member';
import Mandates from '../../pages/mandates/Mandates';
import Mandate from '../../pages/mandate/Mandate';
import DirectDebits from '../../pages/direct-debits/DirectDebits';
import DirectDebit from '../../pages/direct-debit/DirectDebit';
import DirectDebitBatch from '../../pages/direct-debit/DirectDebitBatch';
import DirectDebitInstruction from '../../pages/direct-debit/DirectDebitInstruction';

const Main = () => {
    return (
        <main>
            <ErrorBoundary FallbackComponent={ErrorPage}>
                <Switch>
                    {/* <Route exact path="/" component={Home} /> */}

                    <NoAuthRoute exact path="/login" component={Login} />
                    <Route exact path="/oauth/:providerType" component={OAuth} />
                    <AuthRoute exact path="/logout" component={Logout} />

                    <AdminRoute exact path="/users" component={Users} />
                    <AdminRoute path="/users/:userId" component={User} />

                    <AdminRoute exact path="/members" component={Members} />
                    <Route path="/members/:memberId" component={Member} />

                    <AdminRoute exact path="/mandates" component={Mandates} />
                    <AdminRoute exact path="/mandates/review" component={Mandates} />
                    <Route path="/mandates/:mandateId" component={Mandate} />

                    <AdminRoute exact path="/direct-debits" component={DirectDebits} />
                    <Route exact path="/direct-debits/:directDebitId" component={DirectDebit} />
                    <Route exact path="/direct-debits/:directDebitId/batches/:directDebitBatchId" component={DirectDebitBatch} />
                    <Route exact path="/direct-debits/:directDebitId/instructions/:directDebitInstructionId" component={DirectDebitInstruction} />
                </Switch>
            </ErrorBoundary>
        </main>
    );
};

export default Main;
