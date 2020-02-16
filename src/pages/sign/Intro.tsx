import React from 'react';
import {Trans} from 'react-i18next';
import {RouteComponentProps} from 'react-router-dom';
import {Segment, Grid} from 'semantic-ui-react';

// import DigitalMandateForm from '../../components//mandate/DigitalMandateForm';
import PaperMandateForm from '../../components//mandate/PaperMandateForm';

import styles from './Sign.css';

interface IRouteParams {
    memberId: string;
}

const Intro = ({match, history}: RouteComponentProps<IRouteParams>) => {
    // const {t} = useTranslation();

    return (
        <>
            <p className={styles.text}>
                <Trans i18nKey="mandates:sign.intro.text1">
                    Once a year J&SV Exaltio will automatically deduct your membership fee from your bank account.
                    You will receive an email notification before the transaction takes place.
                    To do this we use SEPA Direct Debit, for which we require your permission in the form of a SEPA mandate.
                </Trans>
            </p>

            {/* <p className={styles.text}>
                <Trans i18nKey="mandates:sign.intro.text2">
                    There are two ways to sign the mandate: via your online bank environment or by printing out a form and reuploading it with your signature.
                    We recommend using method A, because it's the most secure. However, method A only supports most Dutch banks.
                    If your bank is not listed below, please us method B. Unfortunately, some banks are only available during office hours.
                    If signing the mandate fails during the evening, you can try again during office hours or use method B.
                </Trans>
            </p> */}

            {/* <Segment className={styles.segment}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Header size="huge" textAlign="center">
                                A.
                                <Header.Subheader>
                                    {t('mandates:sign.intro.recommended', 'RECOMMENDED')}
                                </Header.Subheader>
                            </Header>
                        </Grid.Column>
                        <Grid.Column width={13}>
                            <p className={styles.text}>
                                <Trans i18nKey="mandates:sign.intro.digital">
                                    To sign a mandate you will be redirected to your online bank environment.
                                    Here you will sign in with the credentials provided by your bank to confirm you want to sign a mandate with us.
                                </Trans>
                            </p>

                            <DigitalMandateForm memberId={match.params.memberId} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment> */}

            <Segment className={styles.segment}>
                <Grid>
                    <Grid.Row>
                        {/* <Grid.Column width={3}>
                            <Header size="huge" textAlign="center">B.</Header>
                        </Grid.Column>
                        <Grid.Column width={13}> */}
                        <Grid.Column width={16}>
                            <p className={styles.text}>
                                <Trans i18nKey="mandates:sign.intro.paper">
                                    To sign a mandate you need to fill in your details, print out the form and reupload it with your signature on it.
                                </Trans>
                            </p>

                            <PaperMandateForm memberId={match.params.memberId} history={history} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </>
    );
};

export default Intro;
