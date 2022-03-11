import React from 'react';
import {useTranslation} from 'react-i18next';
import {useQuery} from '@apollo/react-hooks';
import {Loader} from 'semantic-ui-react';

import {MandateTable} from '../../components/mandates/MandateTable';
import {GetPaperMandatesQuery, GetPaperMandatesQueryVariables, MandateStatus} from '../../generated/graphql';
import GetPaperMandates from '../../queries/GetPaperMandates.graphql';

export const ReviewList: React.FC = () => {
    const {t} = useTranslation();
    const {loading, data, error} = useQuery<GetPaperMandatesQuery, GetPaperMandatesQueryVariables>(GetPaperMandates, {
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
                    {data.paperMandates.values.length === 0 && t('mandates:mandates.review.none', 'No mandates to review.')}
                    {data.paperMandates.values.length > 0 && t('mandates:mandates.review.text', 'These mandates need to be reviewed.')}
                </p>
            )}
            {data && data.paperMandates.values.length > 0 && <MandateTable mandates={data.paperMandates.values} />}
        </>
    );
};
