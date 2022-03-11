import React from 'react';
import {useTranslation} from 'react-i18next';
import {useMutation} from '@apollo/react-hooks';
import {Button, Icon} from 'semantic-ui-react';

import {RejectPaperMandateMutation, RejectPaperMandateMutationVariables, MandateStatus} from '../../generated/graphql';
import GetMandates from '../../queries/GetMandates.graphql';
import GetPaperMandates from '../../queries/GetPaperMandates.graphql';
import RejectPaperMandate from '../../mutations/RejectPaperMandate.graphql';

import {RejectModal, IValues} from './RejectModal';

export interface RejectButtonProps {
    mandateId: string;
}

export const RejectButton: React.FC<RejectButtonProps> = ({mandateId}) => {
    const {t} = useTranslation();

    const [reject, {loading, error}] = useMutation<RejectPaperMandateMutation, RejectPaperMandateMutationVariables>(RejectPaperMandate, {
        variables: {
            id: mandateId,
            reason: undefined
        },
        refetchQueries: [{
            query: GetMandates
        }, {
            query: GetPaperMandates,
            variables: {
                status: MandateStatus.UNACCEPTED
            }
        }]
    });

    return (
        <RejectModal
            trigger={(
                <Button color="red" disabled={loading}>
                    <Icon name="times" />
                    {t('mandates:mandate.review.reject', 'Reject')}
                </Button>
            )}
            error={error}
            onSubmit={(data: IValues) => reject({
                variables: {
                    id: mandateId,
                    ...data
                }
            })}
        />
    );
};
