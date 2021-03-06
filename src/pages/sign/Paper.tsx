import React, {useContext, useEffect} from 'react';
import {Trans, useTranslation} from 'react-i18next';
import {useNavigate} from 'react-router-dom';
import {gql, useQuery} from '@apollo/react-hooks';
import {Loader, Header, List, Button, Icon} from 'semantic-ui-react';

import {UserContext} from '../../components/authentication/UserContext';
import {PaperMandateUploadForm} from '../../components/mandate/PaperMandateUploadForm';
import {
    GetMemberMandatesQuery,
    GetMemberMandatesQueryVariables,
    MandateStatus,
    MandateFragment_PaperMandate_ as MandateFragmentPaperMandate
} from '../../generated/graphql';
import GetMemberMandates from '../../queries/GetMemberMandates.graphql';
import {getPendingPaperMandates} from '../../util';

import * as styles from './Sign.module.css';

export const Paper: React.FC = () => {
    const navigate = useNavigate();
    const {t} = useTranslation();
    const user = useContext(UserContext);

    const {loading, data, error} = useQuery<GetMemberMandatesQuery, GetMemberMandatesQueryVariables>(gql(GetMemberMandates), {
        variables: {
            id: user.id
        }
    });

    const paperMandate = data ? getPendingPaperMandates(data.member.mandates.values)[0] as MandateFragmentPaperMandate : null;

    useEffect(() => {
        if (data && !paperMandate) {
            navigate('/sign');
        }
    }, [data, paperMandate, navigate]);

    if (loading) {
        return <Loader active />;
    }

    if (error) {
        throw error;
    }

    return (
        <>
            {paperMandate && paperMandate.status === MandateStatus.UNACCEPTED && (
                <p className={styles.text}>
                    <Trans i18nKey="mandates:sign.paper.pending">
                        Thank you for signing and uploading the mandate form. The board will review it within in few days.
                        You will receive an email when the mandate has been reviewed.
                    </Trans>
                </p>
            )}

            {paperMandate && paperMandate.status === MandateStatus.CREATED && (
                <>
                    <p className={styles.text}>
                        <Trans i18nKey="mandates:sign.paper.instructions">
                            You need to download the mandate form, print it out and sign it with your signature.
                            Afterwards, you can make a photo of the form or scan it using a scanner.
                            If you are unable to print, photograph or scan the mandate form, please contact the board.
                        </Trans>
                    </p>
                    <Button color="blue" as="a" href={paperMandate.generatedFile.url} target="mandate">
                        <Icon name="download" />
                        {t('mandates:sign.paper.download', 'Download mandate form')}
                    </Button>

                    <Header size="large">{t('mandates:sign.paper.requirements.header', 'Requirements')}</Header>
                    <List size="large" bulleted>
                        <List.Item>
                            {t('mandates:sign.paper.requirements.line1', 'Sign the document with a valid signature.')}
                        </List.Item>
                        <List.Item>
                            {t('mandates:sign.paper.requirements.line2', 'Fill in the date and location.')}
                        </List.Item>
                        <List.Item>
                            {t('mandates:sign.paper.requirements.line3', 'The photo or scan has to be clearly readable.')}
                        </List.Item>
                        <List.Item>
                            {t(
                                'mandates:sign.paper.requirements.line4',
                                'The document should take up the entire photo or scan with as little margin as possible.'
                            )}
                        </List.Item>
                        <List.Item>
                            {t('mandates:sign.paper.requirements.line5', 'The scan of the photo should be a PDF, PNG or JPG file (maximum size 5 MB).')}
                        </List.Item>
                    </List>

                    <Header size="large">{t('mandates:sign.paper.upload.header', 'Upload')}</Header>
                    <PaperMandateUploadForm paperMandateId={paperMandate.id} />
                </>
            )}
        </>
    );
};
