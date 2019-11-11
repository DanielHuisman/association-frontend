import React from 'react';
import {Trans} from 'react-i18next';
import {Segment, Grid, Header} from 'semantic-ui-react';

import styles from './Sign.css';

const Intro = () => {
    return (
        <>
            <p className={styles.text}>
                <Trans i18nKey="mandates:sign.intro.text1">
                    {/* TODO: change this text */}
                    On the first day of every month VCK will automatically deduct your membership fee and/or rent for devices from your bank account.
                    You will receive an email notification each month before the transaction takes place.
                    To do this we use SEPA Direct Debit, for which we require your permission in the form of a SEPA eMandate.
                </Trans>
            </p>

            <p className={styles.text}>
                <Trans i18nKey="mandates:sign.intro.text2">
                    There are two ways to sign the mandate: via your online bank environment or by printing out a form and reuploading it with your signature.
                    We recommend using method A, because it's the most secure. However, method A only supports most Dutch banks.
                    If your bank is not listed below, please us method B. Unfortunately, some banks are only available during office hours.
                    If signing the mandate fails during the evening, you can try again during office hours or use method B.
                </Trans>
            </p>

            <Segment className={styles.segment}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Header size="huge" textAlign="center">
                                A.
                                <Header.Subheader>
                                    RECOMMENDED
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

                            {/* TODO: add bank selection form */}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <Segment className={styles.segment}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Header size="huge" textAlign="center">B.</Header>
                        </Grid.Column>
                        <Grid.Column width={13}>
                            <p className={styles.text}>
                                <Trans i18nKey="mandates:sign.intro.paper">
                                    To sign a mandate you need to fill in your details, print out the form and reupload it with your signature on it.
                                </Trans>
                            </p>

                            {/* TODO: add bank details form */}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </>
    );
};

export default Intro;