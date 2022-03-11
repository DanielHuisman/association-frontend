import React from 'react';
import {useTranslation} from 'react-i18next';

import {MembershipFragment, MembershipType as MembershipTypeEnum} from '../../generated/graphql';

export interface MembershipTypeProps {
    membership: MembershipFragment;
}

export const MembershipType: React.FC<MembershipTypeProps> = ({membership}) => {
    const {t} = useTranslation();

    return (
        <>
            {membership.type === MembershipTypeEnum.NORMAL ?
                t('members:membership.types.normal', 'Regular member') :
                (membership.type === MembershipTypeEnum.HONORARY ?
                    t('members:membership.types.honorary', 'Honorary member') :
                    t('members:membership.types.extraordinary', 'Extraordinary member'))}
        </>
    );
};
