import React from 'react';
import {Mutation} from 'react-apollo';
import {useTranslation} from 'react-i18next';
import {Button, Icon} from 'semantic-ui-react';

import CancelPaperMandate from '../../mutations/CancelPaperMandate.graphql';
import {CancelPaperMandate as CancelPaperMandateType} from '../../types/generatedTypes';

interface IProps {
    mandateId: string;
    text?: string;
}

const CancelButton = ({mandateId, text}: IProps) => {
    const {t} = useTranslation();

    return (
        <Mutation<CancelPaperMandateType>
            mutation={CancelPaperMandate}
            variables={{id: mandateId}}
        >
            {(cancel, {loading}) => {
                return (
                    <Button color="grey" onClick={() => cancel()} disabled={loading}>
                        <Icon name="times" />
                        {t('general:cancel', 'Cancel')}
                    </Button>
                );
            }}
        </Mutation>
    );
};

export default CancelButton;
