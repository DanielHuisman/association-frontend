import React from 'react';
import {useTranslation} from 'react-i18next';
import {gql, useMutation} from '@apollo/react-hooks';
import {Button, Icon} from 'semantic-ui-react';

import {AcceptPaperMandateMutation, AcceptPaperMandateMutationVariables, MandateStatus} from '../../generated/graphql';
import GetMandates from '../../queries/GetMandates.graphql';
import GetPaperMandates from '../../queries/GetPaperMandates.graphql';
import AcceptPaperMandate from '../../mutations/AcceptPaperMandate.graphql';

export interface AcceptButtonProps {
    mandateId: string;
}

export const AcceptButton: React.FC<AcceptButtonProps> = ({mandateId}) => {
    const {t} = useTranslation();

    const [accept, {loading}] = useMutation<AcceptPaperMandateMutation, AcceptPaperMandateMutationVariables>(gql(AcceptPaperMandate), {
        variables: {
            id: mandateId
        },
        refetchQueries: [{
            query: gql(GetMandates)
        }, {
            query: gql(GetPaperMandates),
            variables: {
                status: MandateStatus.UNACCEPTED
            }
        }]
    });

    return (
        <Button color="green" onClick={() => accept()} disabled={loading}>
            <Icon name="check" />
            {t('mandates:mandate.review.accept', 'Accept')}
        </Button>
    );
};
