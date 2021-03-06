import React from 'react';
import {useTranslation} from 'react-i18next';
import {Field, FormikConfig} from 'formik';
import * as Yup from 'yup';

import {Form, FieldInput, SubmitButton} from '../../../components/form';

export interface IValues {
    email: string;
}

export interface RequestVerifyEmailFormProps {
    onSubmit: FormikConfig<IValues>['onSubmit'];
}

const schema = Yup.object().shape({
    email: Yup.string()
        .required('This field is required.')
        .email('Invalid email address.')
});

export const RequestVerifyEmailForm: React.FC<RequestVerifyEmailFormProps> = ({onSubmit}) => {
    const {t} = useTranslation();

    return (
        <Form<IValues>
            initialValues={{
                email: ''
            }}
            validationSchema={schema}
            onSubmit={onSubmit}
        >
            <Field component={FieldInput} name="email" type="text" label={t('auth:requestVerifyEmail.email', 'Email address')} />

            <SubmitButton color="pink">
                {t('auth:requestVerifyEmail.request', 'Send email verification link')}
            </SubmitButton>
        </Form>
    );
};
