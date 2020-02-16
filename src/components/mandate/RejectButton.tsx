import React from 'react';
import {Mutation} from 'react-apollo';
import {useTranslation} from 'react-i18next';
import {Button, Icon} from 'semantic-ui-react';

import GetMandates from '../../queries/GetMandates.graphql';
import GetPaperMandates from '../../queries/GetPaperMandates.graphql';
import RejectPaperMandate from '../../mutations/RejectPaperMandate.graphql';
import {RejectPaperMandate as RejectPaperMandateType, MandateStatus} from '../../types/generatedTypes';

import RejectModal, {IValues} from './RejectModal';

interface IProps {
    mandateId: string;
}

const AcceptButton = ({mandateId}: IProps) => {
    const {t} = useTranslation();

    return (
        <Mutation<RejectPaperMandateType>
            mutation={RejectPaperMandate}
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
            {(reject, {loading, error}) => {
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
                            variables: data
                        })}
                    />
                );
            }}
        </Mutation>
    );
};

export default AcceptButton;
