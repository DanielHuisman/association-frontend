import React from 'react';
import {useTranslation} from 'react-i18next';

import {MembershipFragment, MembershipType} from '../../types/generatedTypes';

interface IProps {
    membership: MembershipFragment;
}

const MembershipTypeComponent = ({membership}: IProps) => {
    const {t} = useTranslation();

    return (
        <>
            {membership.type === MembershipType.NORMAL ?
                t('members:membership.types.normal', 'Regular member') :
                (membership.type === MembershipType.HONORARY ?
                    t('members:membership.types.honorary', 'Honorary member') :
                    t('members:membership.types.extraordinary', 'Extraordinary member'))}
        </>
    );
};

export default MembershipTypeComponent;
