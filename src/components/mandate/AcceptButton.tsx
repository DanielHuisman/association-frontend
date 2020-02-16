import React from 'react';
import {Mutation} from 'react-apollo';
import {useTranslation} from 'react-i18next';
import {Button, Icon} from 'semantic-ui-react';

import GetMandates from '../../queries/GetMandates.graphql';
import GetPaperMandates from '../../queries/GetPaperMandates.graphql';
import AcceptPaperMandate from '../../mutations/AcceptPaperMandate.graphql';
import {AcceptPaperMandate as AcceptPaperMandateType, MandateStatus} from '../../types/generatedTypes';

interface IProps {
    mandateId: string;
}

const AcceptButton = ({mandateId}: IProps) => {
    const {t} = useTranslation();

    return (
        <Mutation<AcceptPaperMandateType>
            mutation={AcceptPaperMandate}
            variables={{id: mandateId}}
            refetchQueries={[{
                query: GetMandates
            }, {
                query: GetPaperMandates,
                variables: {
                    status: MandateStatus.UNACCEPTED
                }
            }]}
        >
            {(accept, {loading}) => {
                return (
                    <Button color="green" onClick={() => accept()} disabled={loading}>
                        <Icon name="check" />
                        {t('mandates:mandate.review.accept', 'Accept')}
                    </Button>
                );
            }}
        </Mutation>
    );
};

export default AcceptButton;
