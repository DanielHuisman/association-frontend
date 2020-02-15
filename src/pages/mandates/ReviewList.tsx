import React from 'react';
import {useTranslation} from 'react-i18next';
import {useQuery} from '@apollo/react-hooks';
import {Loader} from 'semantic-ui-react';

import MandateTable from '../../components/mandates/MandateTable';
import GetPaperMandates from '../../queries/GetPaperMandates.graphql';
import {GetPaperMandates as GetPaperMandatesType, MandateStatus} from '../../types/generatedTypes';

const MandatesReviewList = () => {
    const {t} = useTranslation();
    const {loading, data, error} = useQuery<GetPaperMandatesType>(GetPaperMandates, {
        variables: {
            status: MandateStatus.UNACCEPTED
        }
    });

    if (error) {
        throw error;
    }

    return (
        <>
            {loading && <Loader active />}

            {data && (
                <p>
                    {data.paperMandates.length === 0 && t('mandates:mandates.review.none', 'No mandates to review.')}
                    {data.paperMandates.length > 0 && t('mandates:mandates.review.text', 'These mandates need to be reviewed.')}
                </p>
            )}
            {data && data.paperMandates.length > 0 && <MandateTable mandates={data.paperMandates} />}
        </>
    );
};

export default MandatesReviewList;
