import React from 'react';
import {useTranslation} from 'react-i18next';
import {useMutation} from '@apollo/react-hooks';
import {Button, Icon} from 'semantic-ui-react';

import {InvalidateMandateMutation, InvalidateMandateMutationVariables} from '../../generated/graphql';
import InvalidateMandate from '../../mutations/InvalidateMandate.graphql';

interface IProps {
    mandateId: string;
}

const InvalidateButton = ({mandateId}: IProps) => {
    const {t} = useTranslation();

    const [invalidate, {loading}] = useMutation<InvalidateMandateMutation, InvalidateMandateMutationVariables>(InvalidateMandate, {
        variables: {
            id: mandateId
        }
    });

    return (
        <Button color="red" onClick={() => invalidate()} disabled={loading}>
            <Icon name="times" />
            {t('mandates:mandate.invalidate', 'Invalidate mandate')}
        </Button>
    );
};

export default InvalidateButton;
