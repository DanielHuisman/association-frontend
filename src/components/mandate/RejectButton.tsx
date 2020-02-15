import React from 'react';
import {Mutation} from 'react-apollo';
import {useTranslation} from 'react-i18next';
import {Button, Icon} from 'semantic-ui-react';

import RejectPaperMandate from '../../mutations/RejectPaperMandate.graphql';
import {RejectPaperMandate as RejectPaperMandateType} from '../../types/generatedTypes';

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
        >
            {(reject, {loading}) => {
                return (
                    <RejectModal
                        trigger={(
                            <Button color="red" disabled={loading}>
                                <Icon name="times" />
                                {t('mandates:mandate.review.reject', 'Reject')}
                            </Button>
                        )}
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
