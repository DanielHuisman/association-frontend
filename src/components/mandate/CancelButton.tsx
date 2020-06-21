import React from 'react';
import {useTranslation} from 'react-i18next';
import {useMutation} from '@apollo/react-hooks';
import {Button, Icon} from 'semantic-ui-react';

import CancelPaperMandate from '../../mutations/CancelPaperMandate.graphql';
import {CancelPaperMandateMutation} from '../../generated/graphql';

interface IProps {
    mandateId: string;
}

const CancelButton = ({mandateId}: IProps) => {
    const {t} = useTranslation();

    const [cancel, {loading}] = useMutation<CancelPaperMandateMutation>(CancelPaperMandate, {
        variables: {
            id: mandateId
        }
    });

    return (
        <Button color="grey" onClick={() => cancel()} disabled={loading}>
            <Icon name="times" />
            {t('general:cancel', 'Cancel')}
        </Button>
    );
};

export default CancelButton;
