import React from 'react';
import {useTranslation} from 'react-i18next';
import {RouteComponentProps} from 'react-router-dom';
import {Field} from 'formik';
import * as Yup from 'yup';
import {isValidBIC, isValidIBAN} from 'ibantools';
import {Icon} from 'semantic-ui-react';

import CreatePaperMandate from '../../mutations/CreatePaperMandate.graphql';
import {CreatePaperMandate as CreatePaperMandateType} from '../../types/generatedTypes';
import {Form, FieldInput, SubmitButton} from '../form';
import {MutationFormPage} from '../page';

interface IProps {
    memberId: string;
    history: RouteComponentProps['history'];
}

interface IValues {
    iban: string;
    bic: string;
}

const schema = Yup.object().shape({
    iban: Yup.string()
        .required('This field is required.')
        .test('is-valid-iban', 'Invalid IBAN.', isValidIBAN),
    bic: Yup.string()
        .required('This field is required.')
        .test('is-valid-bic', 'Invalid BIC.', isValidBIC)
});

const PaperMandateForm = ({memberId, history}: IProps) => {
    const {t} = useTranslation();

    return (
        <MutationFormPage<CreatePaperMandateType, IValues>
            mutation={CreatePaperMandate}

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
                    history.push(`/members/${memberId}/mandates/sign/paper`);
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
                        <Field component={FieldInput} name="iban" type="text" label={t('mandates:mandate.iban', 'IBAN')} />
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

export default PaperMandateForm;
