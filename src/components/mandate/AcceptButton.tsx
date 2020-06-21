import React from 'react';
import {useTranslation} from 'react-i18next';
import {useMutation} from '@apollo/react-hooks';
import {Button, Icon} from 'semantic-ui-react';

import {AcceptPaperMandateMutation, AcceptPaperMandateMutationVariables, MandateStatus} from '../../generated/graphql';
import GetMandates from '../../queries/GetMandates.graphql';
import GetPaperMandates from '../../queries/GetPaperMandates.graphql';
import AcceptPaperMandate from '../../mutations/AcceptPaperMandate.graphql';

interface IProps {
    mandateId: string;
}

const AcceptButton = ({mandateId}: IProps) => {
    const {t} = useTranslation();

    const [accept, {loading}] = useMutation<AcceptPaperMandateMutation, AcceptPaperMandateMutationVariables>(AcceptPaperMandate, {
        variables: {
            id: mandateId
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
        <Button color="green" onClick={() => accept()} disabled={loading}>
            <Icon name="check" />
            {t('mandates:mandate.review.accept', 'Accept')}
        </Button>
    );
};

export default AcceptButton;
