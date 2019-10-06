import React from 'react';
import {useTranslation} from 'react-i18next';
import {Icon} from 'semantic-ui-react';

interface IProps {
    value: boolean;
}

const YesNo = ({value = false}: IProps) => {
    const {t} = useTranslation();

    return value ? (
        <>
            <Icon name="check" color="green" />
            {t('general:general.yes', 'Yes')}
        </>
    ) : (
        <>
            <Icon name="times" color="red" />
            {t('general:genral.no', 'No')}
        </>
    );
};

export default YesNo;
