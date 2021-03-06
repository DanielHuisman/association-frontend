import React from 'react';
import {useTranslation} from 'react-i18next';

import {MandateFragment} from '../../generated/graphql';

export interface MandateTypeProps {
    mandate: MandateFragment;
}

export const MandateType: React.FC<MandateTypeProps> = ({mandate}) => {
    const {t} = useTranslation();

    return (
        <>
            {mandate.__typename === 'DigitalMandate' ?
                t('mandates:mandate.types.digital', 'Digital mandate') :
                t('mandates:mandate.types.paper', 'Paper mandate')}
        </>
    );
};
