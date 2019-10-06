import React from 'react';
import {useTranslation} from 'react-i18next';
import {Icon} from 'semantic-ui-react';
import {MemberFragment, MandateFragment} from 'generatedTypes';

interface IProps {
    member: MemberFragment & {
        mandates: MandateFragment[]
    };
}

const HasMandate = ({member}: IProps) => {
    const {t} = useTranslation();

    return member.mandates.length > 0 ? (
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

export default HasMandate;
