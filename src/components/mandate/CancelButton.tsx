import React from 'react';
import {useTranslation} from 'react-i18next';
import {gql, useMutation} from '@apollo/react-hooks';
import {Button, Icon} from 'semantic-ui-react';

import CancelPaperMandate from '../../mutations/CancelPaperMandate.graphql';
import {CancelPaperMandateMutation} from '../../generated/graphql';

export interface CancelButtonProps {
    mandateId: string;
}

export const CancelButton: React.FC<CancelButtonProps> = ({mandateId}) => {
    const {t} = useTranslation();

    const [cancel, {loading}] = useMutation<CancelPaperMandateMutation>(gql(CancelPaperMandate), {
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
