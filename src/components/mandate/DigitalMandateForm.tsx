import React from 'react';

import GetBanks from '../../queries/GetBanks.graphql';
import CreateDigitalMandate from '../../mutations/CreateDigitalMandate.graphql';
import {
    GetBanks as GetBanksType,
    CreateDigitalMandate as CreateDigitalMandateType
} from '../../types/generatedTypes';
import {FormPage} from '../page';

interface IValues {
    bic: string;
}

const DigitalMandateForm = () => (
    <FormPage<GetBanksType, CreateDigitalMandateType, IValues>
        query={GetBanks}
        mutation={CreateDigitalMandate}

        data={(values) => {
            return {
                variables: {
                    data: {
                        bic: values.bic,
                        member: {
                            id: ''
                        }
                    }
                }
            };
        }}
    >
        {(handleSubmit, queryResult, mutationResult, mutateFn) => {

            return (
                <div>Test</div>
            );
        }}
    </FormPage>
);

export default DigitalMandateForm;
