import React from 'react';
import {useTranslation} from 'react-i18next';
import {useQuery} from '@apollo/react-hooks';
import {Loader} from 'semantic-ui-react';

import {MemberTable} from '../../components/members/MemberTable';
import {GetMembersQuery, GetMembersQueryVariables} from '../../generated/graphql';
import GetMembers from '../../queries/GetMembers.graphql';
import {hasAcceptedMandates} from '../../util';

export interface ListProps {
    filter: (value: GetMembersQuery['members']['values'][0], index: number, array: GetMembersQuery['members']['values']) => boolean;
    showMandatesCounter?: boolean;
}

export const List: React.FC<ListProps> = ({filter, showMandatesCounter = false}) => {
    const {t} = useTranslation();
    const {loading, data, error} = useQuery<GetMembersQuery, GetMembersQueryVariables>(GetMembers);

    if (error) {
        throw error;
    }

    const members = data && data.members.values.filter(filter);

    return (
        <>
            {loading && <Loader active />}

            {data && (
                <>
                    {showMandatesCounter && <p>{
                        t('members:members.withMandate', 'Members with mandate:')}
                        {' '}
                        {members.filter((member) => hasAcceptedMandates(member.mandates.values)).length} / {members.length}
                    </p>}

                    <MemberTable members={members} />
                </>
            )}
        </>
    );
};
