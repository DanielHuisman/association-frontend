import React from 'react';
import {useTranslation} from 'react-i18next';
import {MandateFragment} from 'generatedTypes';

interface IProps {
    mandate: MandateFragment;
}

const MandateType = ({mandate}: IProps) => {
    const {t} = useTranslation();

    return (
        <>
            {mandate.__typename === 'DigitalMandate' ?
                t('mandates:mandate.types.digital', 'Digital mandate') :
                t('mandates:mandate.types.paper', 'Paper mandate')}
        </>
    );
};

export default MandateType;
