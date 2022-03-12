import React from 'react';
import {useTranslation} from 'react-i18next';
import {Field} from 'formik';
import * as Yup from 'yup';
import {Loader, Icon, Message} from 'semantic-ui-react';
import {gql} from '@apollo/react-hooks';

import {Form, FieldDropdown, SubmitButton} from '../form';
import {FormPage} from '../page';
import {GetBanksQuery, CreateDigitalMandateMutation} from '../../generated/graphql';
import GetBanks from '../../queries/GetBanks.graphql';
import CreateDigitalMandate from '../../mutations/CreateDigitalMandate.graphql';

export interface DigitalMandateFormProps {
    memberId: string;
}

interface IValues {
    bic: string;
}

const schema = Yup.object().shape({
    bic: Yup.string().required('This field is required.')
});

export const DigitalMandateForm: React.FC<DigitalMandateFormProps> = ({memberId}) => {
    const {t} = useTranslation();

    return (
        <FormPage<GetBanksQuery, CreateDigitalMandateMutation, IValues>
            query={gql(GetBanks)}
            mutation={gql(CreateDigitalMandate)}

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

                if (mutationResult.data && mutationResult.data.createDigitalMandate) {
                    // Redirect to bank environment
                    window.location.href = mutationResult.data.createDigitalMandate.redirectUrl;
                    return <Loader active={true} />;
                }

                const options = queryResult.data.banks.values.map((bank) => ({
                    key: bank.bic,
                    value: bank.bic,
                    text: bank.name
                }));

                return (
                    <Form<IValues>
                        initialValues={{
                            // bic: options[0].value
                            bic: null
                        }}
                        validationSchema={schema}
                        onSubmit={handleSubmit}
                    >
                        {mutationResult.error && (
                            <Message error visible>
                                <Message.Header>
                                    {t('mandates:sign.digital.redirect.error.header', 'Failed to redirect to bank')}
                                </Message.Header>
                                <Message.Content>
                                    {t('mandates:sign.digital.redirect.error.description', 'An error occurred, try again later or contact the board.')}
                                </Message.Content>
                            </Message>
                        )}

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
