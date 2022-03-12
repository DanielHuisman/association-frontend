import React from 'react';
import {useTranslation} from 'react-i18next';
import {Field} from 'formik';
import * as Yup from 'yup';
import {isValidBIC, isValidIBAN} from 'ibantools';
import {Message, Icon} from 'semantic-ui-react';
import {gql} from '@apollo/react-hooks';

import {Form, FieldInput, FieldInputProps, SubmitButton} from '../form';
import {MutationFormPage} from '../page';
import {CreatePaperMandateMutation} from '../../generated/graphql';
import GetMember from '../../queries/GetMember.graphql';
import CreatePaperMandate from '../../mutations/CreatePaperMandate.graphql';

export interface PaperMandateFormProps {
    memberId: string;
}

interface IValues {
    iban: string;
    bic: string;
}

const schema = Yup.object().shape({
    iban: Yup.string()
        .required('This field is required.')
        .test('is-valid-iban', 'Invalid IBAN.', (s?: string) => s && isValidIBAN(s.replace(/ /g, ''))),
    bic: Yup.string()
        .required('This field is required.')
        .test('is-valid-bic', 'Invalid BIC.', (s?: string) => s && isValidBIC(s.replace(/ /g, '')))
});

const BIC_LOOKUP = {
    abna: 'ABNANL2A',
    asnb: 'ASNBNL21',
    bunq: 'BUNQNL2A',
    ingb: 'INGBNL2A',
    knab: 'KNABNL2H',
    rabo: 'RABONL2U',
    rbrb: 'RBRBNL2A',
    snsb: 'SNSBNL2A',
    trio: 'TRIONL2U'
};

const FieldIBAN: React.FC<FieldInputProps> = (props) => (
    <FieldInput
        {...props}
        field={{
            ...props.field,
            onChange: (event: React.ChangeEvent<any>) => {
                props.field.onChange(event);

                const iban: string = event.target.value.replace(/\s/g, '').toLowerCase();
                const bic = BIC_LOOKUP[iban.substring(4, 8)];
                if (bic && props.form.values.bic.length === 0) {
                    props.form.setFieldValue('bic', bic);
                }
            }
        }}
    />
);

export const PaperMandateForm: React.FC<PaperMandateFormProps> = ({memberId}) => {
    const {t} = useTranslation();

    return (
        <MutationFormPage<CreatePaperMandateMutation, IValues>
            mutation={gql(CreatePaperMandate)}
            mutationProps={{
                refetchQueries: [{
                    query: gql(GetMember),
                    variables: {
                        id: memberId
                    }
                }],
                awaitRefetchQueries: true
            }}

            loader={false}
            data={(values) => {
                return {
                    variables: {
                        data: {
                            bic: values.bic,
                            iban: values.iban,
                            member: {
                                id: memberId
                            }
                        }
                    }
                };
            }}
        >
            {(handleSubmit, mutationResult) => {
                if (mutationResult.data && mutationResult.data.createPaperMandate) {
                    // TODO: using history.push gives query store errors
                    window.location.href = '/sign/paper';
                }

                return (
                    <Form<IValues>
                        initialValues={{
                            iban: '',
                            bic: ''
                        }}
                        validationSchema={schema}
                        onSubmit={handleSubmit}
                    >
                        {mutationResult.error && (
                            <Message error visible>
                                <Message.Header>
                                    {t('mandates:sign.paper.error.header', 'Failed to create mandate')}
                                </Message.Header>
                                <Message.Content>
                                    {t('mandates:sign.paper.error.description', 'An error occurred, try again later or contact the board.')}
                                </Message.Content>
                            </Message>
                        )}

                        <Field component={FieldIBAN} name="iban" type="text" label={t('mandates:mandate.iban', 'IBAN')} />
                        <Field component={FieldInput} name="bic" type="text" label={t('mandates:mandate.bic', 'BIC')} />

                        <SubmitButton color="blue">
                            {t('mandates:sign.paper.submit', 'Continue')}
                            <Icon name="arrow right" />
                        </SubmitButton>
                    </Form>
                );
            }}
        </MutationFormPage>
    );
};
