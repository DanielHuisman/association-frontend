import React from 'react';
import {useTranslation} from 'react-i18next';
import {Field, FormikConfig} from 'formik';
import * as Yup from 'yup';

import {Form, FieldInput, SubmitButton} from '../../../components/form';
import {ProviderFragment} from '../../../generated/graphql';

export interface IValues {
    currentEmail: string;
    email: string;
}

export interface EmailFormProps {
    provider: ProviderFragment;
    onSubmit: FormikConfig<IValues>['onSubmit'];
}

const schema = Yup.object().shape({
    email: Yup.string()
        .required('This field is required.')
        .email('Invalid email address')
});

export const EmailForm: React.FC<EmailFormProps> = ({provider, onSubmit}) => {
    const {t} = useTranslation();

    return (
        <Form<IValues>
            initialValues={{
                currentEmail: provider.email,
                email: ''
            }}
            validationSchema={schema}
            onSubmit={onSubmit}
        >
            <Field component={FieldInput} name="currentEmail" type="text" label={t('account:security.email.currentEmail', 'Current email address')} readOnly />
            <Field component={FieldInput} name="email" type="text" label={t('account:security.email.newEmail', 'New email address')} />

            <SubmitButton color="blue">
                {t('account:security.email.change', 'Change email address')}
            </SubmitButton>
        </Form>
    );
};
