import React from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import {Switch, Route} from 'react-router-dom';

import {AuthRoute, NoAuthRoute, AdminRoute} from '../../components/authentication';
import Home from '../../pages/home/Home';
import Association from '../../pages/association/Association';
import Calendar from '../../pages/calendar/Calendar';
import Contact from '../../pages/contact/Contact';
import Register from '../../pages/auth/register/Register';
// import Join from '../../pages/join/Join';
import Login from '../../pages/auth/login/Login';
import Logout from '../../pages/auth/logout/Logout';
import VerifyEmail from '../../pages/auth/verify-email/VerifyEmail';
import ResetPassword from '../../pages/auth/reset-password/ResetPassword';
import RequestVerifyEmail from '../../pages/auth/request-verify-email/RequestVerifyEmail';
import RequestResetPassword from '../../pages/auth/request-reset-password/RequestResetPassword';
import Account from '../../pages/account/Account';
import Sign from '../../pages/sign/Sign';
import Members from '../../pages/members/Members';
import Member from '../../pages/member/Member';
import Mandates from '../../pages/mandates/Mandates';
import Mandate from '../../pages/mandate/Mandate';
import DirectDebits from '../../pages/direct-debits/DirectDebits';
import DirectDebit from '../../pages/direct-debit/DirectDebit';
import DirectDebitBatch from '../../pages/direct-debit/DirectDebitBatch';
import DirectDebitInstruction from '../../pages/direct-debit/DirectDebitInstruction';
import Transaction from '../../pages/transaction/Transaction';
import Pages from '../../pages/pages/Pages';
import ErrorPage from '../../pages/util/error/Error';
import NotFound from '../../pages/util/not-found/NotFound';

interface IProps {
    jumbotron?: boolean;
}

const Main = ({jumbotron = false}: IProps) => {
    return (
        <main className={jumbotron ? 'jumbotron' : ''}>
            <ErrorBoundary FallbackComponent={ErrorPage}>
                <Switch>
                    <Route exact path="/" component={Home} />

                    <Route path="/association" component={Association} />
                    <Route exact path="/calendar" component={Calendar} />
                    <Route exact path="/contact" component={Contact} />

                    <NoAuthRoute exact path="/register" component={Register} />
                    <NoAuthRoute exact path="/join" component={Register} />
                    {/* <NoAuthRoute exact path="/register" component={Join} />
                    <NoAuthRoute exact path="/join" component={Join} /> */}
                    <NoAuthRoute exact path="/login" component={Login} />
                    <AuthRoute exact path="/logout" component={Logout} />
                    <Route exact path="/verify/:token" component={VerifyEmail} />
                    <NoAuthRoute exact path="/reset/:token" component={ResetPassword} />
                    <Route exact path="/request/verify" component={RequestVerifyEmail} />
                    <NoAuthRoute exact path="/request/reset" component={RequestResetPassword} />

                    <AuthRoute path="/account" component={Account} />
                    <AuthRoute path="/sign" component={Sign} />

                    <AdminRoute exact path="/members" component={Members} />
                    <AdminRoute path="/members/:memberId" component={Member} />

                    <AdminRoute exact path="/mandates" component={Mandates} />
                    <AdminRoute exact path="/mandates/review" component={Mandates} />
                    <AdminRoute path="/mandates/:mandateId" component={Mandate} />

                    <AdminRoute exact path="/direct-debits" component={DirectDebits} />
                    <AdminRoute exact path="/direct-debits/:directDebitId" component={DirectDebit} />
                    <AdminRoute exact path="/direct-debits/:directDebitId/batches/:directDebitBatchId" component={DirectDebitBatch} />
                    <AdminRoute exact path="/direct-debits/:directDebitId/instructions/:directDebitInstructionId" component={DirectDebitInstruction} />

                    <AdminRoute exact path="/transactions/:transactionId" component={Transaction} />

                    <AdminRoute exact path="/pages" component={Pages} />
                    {/* <AdminRoute path="/pages/:pageId" component={Page} /> */}

                    <Route component={NotFound} />
                </Switch>
            </ErrorBoundary>
        </main>
    );
};

export default Main;
