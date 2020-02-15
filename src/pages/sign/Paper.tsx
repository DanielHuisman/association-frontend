import React, {useEffect} from 'react';
import {useQuery} from '@apollo/react-hooks';
import {Trans, useTranslation} from 'react-i18next';
import {RouteComponentProps} from 'react-router-dom';
import {Loader, Header, List, Button, Icon} from 'semantic-ui-react';

import PaperMandateUploadForm from '../../components/mandate/PaperMandateUploadForm';
import GetMember from '../../queries/GetMember.graphql';
import {GetMember as GetMemberType, MandateStatus, MandateFragment_PaperMandate} from '../../types/generatedTypes';
import {hasPendingPaperMandates, getPendingPaperMandates} from '../../util';

interface IRouteParams {
    memberId: string;
}

const Paper = ({history, match}: RouteComponentProps<IRouteParams>) => {
    const {t} = useTranslation();

    const {loading, data, error} = useQuery<GetMemberType>(GetMember, {
        variables: {
            id: match.params.memberId
        }
    });

    if (loading) {
        return <Loader active />;
    }

    if (error) {
        throw error;
    }

    useEffect(() => {
        if (data && !hasPendingPaperMandates(data.member)) {
            history.push(`/members/${match.params.memberId}`);
        }
    });

    const paperMandate = getPendingPaperMandates(data.member)[0] as MandateFragment_PaperMandate;

    return (
        <>
            {paperMandate && paperMandate.status === MandateStatus.UNACCEPTED && (
                <p>
                    <Trans i18nKey="mandates:sign.paper.pending">
                        Thank you for signing and uploading the mandate form. The board will review it within in few days.
                        You will receive an email when the mandate has been reviewed.
                    </Trans>
                </p>
            )}

            {paperMandate && paperMandate.status === MandateStatus.CREATED && (
                <>
                    <p>
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

                    <Header size="medium">{t('mandates:sign.paper.requirements.header', 'Requirements')}</Header>
                    <List bulleted>
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
                            {t('mandates:sign.paper.requirements.line4', 'The document should take up the entire photo or scan with as little margin as possible.')}
                        </List.Item>
                        <List.Item>
                            {t('mandates:sign.paper.requirements.line5', 'The scan of the photo should be a PDF, PNG or JPG file (maximum size 5 MB).')}
                        </List.Item>
                    </List>

                    <Header size="medium">{t('mandates:sign.paper.upload.header', 'Upload')}</Header>
                    <PaperMandateUploadForm paperMandateId={paperMandate.id} history={history} />
                </>
            )}
        </>
    );
};

export default Paper;
