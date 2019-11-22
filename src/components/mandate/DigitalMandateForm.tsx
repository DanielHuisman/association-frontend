import React from 'react';
import {useTranslation} from 'react-i18next';
import {Field} from 'formik';
import * as Yup from 'yup';
import {Loader, Icon} from 'semantic-ui-react';

import GetBanks from '../../queries/GetBanks.graphql';
import CreateDigitalMandate from '../../mutations/CreateDigitalMandate.graphql';
import {
    GetBanks as GetBanksType,
    CreateDigitalMandate as CreateDigitalMandateType
} from '../../types/generatedTypes';
import {Form, FieldDropdown, SubmitButton} from '../form';
import {FormPage} from '../page';

interface IProps {
    memberId: string;
}

interface IValues {
    bic: string;
}

const schema = Yup.object().shape({
    bic: Yup.string().required('This field is required.')
});

const DigitalMandateForm = ({memberId}: IProps) => {
    const {t} = useTranslation();

    return (
        <FormPage<GetBanksType, CreateDigitalMandateType, IValues>
            query={GetBanks}
            mutation={CreateDigitalMandate}

            loader={false}
            data={(values) => {
                return {
                    variables: {
                        data: {
                            bic: values.bic,
                            member: {
                                id: memberId
                            }
                        }
                    }
                };
            }}
        >
            {(handleSubmit, queryResult, mutationResult) => {
                if (queryResult.loading) {
                    return <Loader active={true} />;
                }
                
                const options = queryResult.data.banks.map((bank) => ({
                    key: bank.bic,
                    value: bank.bic,
                    text: bank.name
                }));

                if (mutationResult.data && mutationResult.data.createDigitalMandate) {
                    // Redirect to bank environment
                    window.location.href = mutationResult.data.createDigitalMandate.redirectUrl;
                }

                return (
                    <Form<IValues>
                        initialValues={{
                            // bic: options[0].value
                            bic: null
                        }}
                        validationSchema={schema}
                        onSubmit={handleSubmit}
                    >
                        <Field component={FieldDropdown} name="bic" label={t('mandates:sign.digital.bank', 'Select a bank')} options={options} />

                        <SubmitButton color="blue">
                            {t('mandates:sign.digital.submit', 'Continue')}
                            <Icon name="arrow right" />
                        </SubmitButton>
                    </Form>
                );
            }}
        </FormPage>
    );
};

export default DigitalMandateForm;
