import React from 'react';
import {useTranslation} from 'react-i18next';
import {Icon} from 'semantic-ui-react';

export interface YesNoProps {
    value: boolean;
}

export const YesNo: React.FC<YesNoProps> = ({value = false}) => {
    const {t} = useTranslation();

    return value ? (
        <>
            <Icon name="check" color="green" />
            {t('general:general.yes', 'Yes')}
        </>
    ) : (
        <>
            <Icon name="times" color="red" />
            {t('general:general.no', 'No')}
        </>
    );
};
