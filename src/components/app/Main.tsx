import React from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import {Route, Routes} from 'react-router-dom';

import {Auth, NoAuth, Admin} from '../../components/authentication';
import {Home} from '../../pages/home/Home';
import {Association} from '../../pages/association/Association';
import {Calendar} from '../../pages/calendar/Calendar';
import {Contact} from '../../pages/contact/Contact';
import {Register} from '../../pages/auth/register/Register';
import {Login} from '../../pages/auth/login/Login';
import {Logout} from '../../pages/auth/logout/Logout';
import {VerifyEmail} from '../../pages/auth/verify-email/VerifyEmail';
import {ResetPassword} from '../../pages/auth/reset-password/ResetPassword';
import {RequestVerifyEmail} from '../../pages/auth/request-verify-email/RequestVerifyEmail';
import {RequestResetPassword} from '../../pages/auth/request-reset-password/RequestResetPassword';
import {Account} from '../../pages/account/Account';
import {Sign} from '../../pages/sign/Sign';
import {Members} from '../../pages/members/Members';
import {Member} from '../../pages/member/Member';
import {Mandates} from '../../pages/mandates/Mandates';
import {Mandate} from '../../pages/mandate/Mandate';
import {DirectDebits} from '../../pages/direct-debits/DirectDebits';
import {DirectDebit} from '../../pages/direct-debit/DirectDebit';
import {DirectDebitBatch} from '../../pages/direct-debit/DirectDebitBatch';
import {DirectDebitInstruction} from '../../pages/direct-debit/DirectDebitInstruction';
import {Transaction} from '../../pages/transaction/Transaction';
import {Pages} from '../../pages/pages/Pages';
import {ErrorPage} from '../../pages/util/error/Error';
import {NotFound} from '../../pages/util/not-found/NotFound';

export interface MainProps {
    jumbotron?: boolean;
}

export const Main: React.FC<MainProps> = ({jumbotron = false}) => {
    return (
        <main className={jumbotron ? 'jumbotron' : ''}>
            <ErrorBoundary FallbackComponent={ErrorPage}>
                <Routes>
                    <Route index element={<Home />} />

                    <Route path="association/*" element={<Association />} />
                    <Route path="calendar" element={<Calendar />} />
                    <Route path="contact" element={<Contact />} />

                    <Route path="register" element={<NoAuth><Register /></NoAuth>} />
                    <Route path="join" element={<NoAuth><Register /></NoAuth>} />
                    <Route path="login" element={<NoAuth><Login /></NoAuth>} />
                    <Route path="logout" element={<Auth><Logout /></Auth>} />
                    <Route path="verify/:token" element={<VerifyEmail />} />
                    <Route path="/reset/:token" element={<NoAuth><ResetPassword /></NoAuth>} />
                    <Route path="/request/verify" element={<RequestVerifyEmail />} />
                    <Route path="/request/reset" element={<NoAuth><RequestResetPassword /></NoAuth>} />

                    <Route path="account/*" element={<Auth><Account /></Auth>} />
                    <Route path="sign/*" element={<Auth><Sign /></Auth>} />

                    <Route path="members" element={<Admin><Members /></Admin>} />
                    <Route path="members/:memberId/*" element={<Admin><Member /></Admin>} />

                    <Route path="mandates/*" element={<Admin><Mandates /></Admin>} />
                    <Route path="mandates/:mandateId/*" element={<Admin><Mandate /></Admin>} />

                    <Route path="direct-debits" element={<Admin><DirectDebits /></Admin>} />
                    <Route path="direct-debits/:directDebitId" element={<Admin><DirectDebit /></Admin>} />
                    <Route path="direct-debits/:directDebitId/batches/:directDebitBatchId" element={<Admin><DirectDebitBatch /></Admin>} />
                    <Route path="direct-debits/:directDebitId/instructions/:directDebitInstructionId" element={<Admin><DirectDebitInstruction /></Admin>} />

                    <Route path="transactions/:transactionId" element={<Admin><Transaction /></Admin>} />

                    <Route path="pages/*" element={<Admin><Pages /></Admin>} />
                    {/* <Route path="/pages/:pageId/*" element={<Admin><Page /></Admin>} /> */}

                    <Route element={NotFound} />
                </Routes>
            </ErrorBoundary>
        </main>
    );
};

export default Main;
