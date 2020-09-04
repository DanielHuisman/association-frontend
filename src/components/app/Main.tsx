import React from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import {Switch, Route} from 'react-router-dom';

import {AuthRoute, NoAuthRoute, AdminRoute} from '../../components/authentication';
import Home from '../../pages/home/Home';
import Association from '../../pages/association/Association';
import Calendar from '../../pages/calendar/Calendar';
import Contact from '../../pages/contact/Contact';
import Join from '../../pages/join/Join';
import Login from '../../pages/auth/login/Login';
import Logout from '../../pages/auth/logout/Logout';
import Members from '../../pages/members/Members';
import Member from '../../pages/member/Member';
import Mandates from '../../pages/mandates/Mandates';
import Mandate from '../../pages/mandate/Mandate';
import DirectDebits from '../../pages/direct-debits/DirectDebits';
import DirectDebit from '../../pages/direct-debit/DirectDebit';
import DirectDebitBatch from '../../pages/direct-debit/DirectDebitBatch';
import DirectDebitInstruction from '../../pages/direct-debit/DirectDebitInstruction';
import Transaction from '../../pages/transaction/Transaction';
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
                    <Route exact path="/join" component={Join} />

                    <NoAuthRoute exact path="/login" component={Login} />
                    <AuthRoute exact path="/logout" component={Logout} />

                    <AdminRoute exact path="/members" component={Members} />
                    <Route path="/members/:memberId" component={Member} />

                    <AdminRoute exact path="/mandates" component={Mandates} />
                    <AdminRoute exact path="/mandates/review" component={Mandates} />
                    <Route path="/mandates/:mandateId" component={Mandate} />

                    <AdminRoute exact path="/direct-debits" component={DirectDebits} />
                    <AdminRoute exact path="/direct-debits/:directDebitId" component={DirectDebit} />
                    <AdminRoute exact path="/direct-debits/:directDebitId/batches/:directDebitBatchId" component={DirectDebitBatch} />
                    <AdminRoute exact path="/direct-debits/:directDebitId/instructions/:directDebitInstructionId" component={DirectDebitInstruction} />

                    <AdminRoute exact path="/transactions/:transactionId" component={Transaction} />

                    <Route component={NotFound} />
                </Switch>
            </ErrorBoundary>
        </main>
    );
};

export default Main;
