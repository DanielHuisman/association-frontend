import React from 'react';
import {useTranslation} from 'react-i18next';
import {useMutation} from '@apollo/react-hooks';
import {Button, Icon} from 'semantic-ui-react';

import {EndMembershipMutation, EndMembershipMutationVariables} from '../../generated/graphql';
import EndMembership from '../../mutations/EndMembership.graphql';

import EndMembershipModal, {IValues} from './EndMembershipModal';

interface IProps {
    membershipId: string;
}

const EndMembershipButton = ({membershipId}: IProps) => {
    const {t} = useTranslation();

    const [reject, {loading, error}] = useMutation<EndMembershipMutation, EndMembershipMutationVariables>(EndMembership, {
        variables: {
            id: membershipId,
            date: undefined
        }
    });

    return (
        <EndMembershipModal
            trigger={(
                <Button color="red" disabled={loading}>
                    <Icon name="times" />
                    {t('members:membership.end.button', 'End membership')}
                </Button>
            )}
            error={error}
            onSubmit={(data: IValues) => reject({
                variables: {
                    id: membershipId,
                    ...data
                }
            })}
        />
    );
};

export default EndMembershipButton;
