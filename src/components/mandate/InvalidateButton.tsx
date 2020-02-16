import React from 'react';
import {Mutation} from 'react-apollo';
import {useTranslation} from 'react-i18next';
import {Button, Icon} from 'semantic-ui-react';

import InvalidateMandate from '../../mutations/InvalidateMandate.graphql';
import {InvalidateMandate as InvalidateMandateType} from '../../types/generatedTypes';

interface IProps {
    mandateId: string;
}

const InvalidateButton = ({mandateId}: IProps) => {
    const {t} = useTranslation();

    return (
        <Mutation<InvalidateMandateType>
            mutation={InvalidateMandate}
            variables={{id: mandateId}}
        >
            {(invalidate, {loading}) => {
                return (
                    <Button color="red" onClick={() => invalidate()} disabled={loading}>
                        <Icon name="times" />
                        {t('mandates:mandate.invalidate', 'Invalidate mandate')}
                    </Button>
                );
            }}
        </Mutation>
    );
};

export default InvalidateButton;
