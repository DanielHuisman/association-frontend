import React from 'react';
import {useTranslation} from 'react-i18next';
import {gql, useMutation} from '@apollo/react-hooks';
import {Button, Icon} from 'semantic-ui-react';

import {EndMembershipMutation, EndMembershipMutationVariables} from '../../generated/graphql';
import EndMembership from '../../mutations/EndMembership.graphql';

import {EndMembershipModal, IValues} from './EndMembershipModal';

export interface EndMembershipButtonProps {
    membershipId: string;
}

export const EndMembershipButton: React.FC<EndMembershipButtonProps> = ({membershipId}) => {
    const {t} = useTranslation();

    const [reject, {loading, error}] = useMutation<EndMembershipMutation, EndMembershipMutationVariables>(gql(EndMembership), {
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
