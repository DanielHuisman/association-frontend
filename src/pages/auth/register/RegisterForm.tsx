import React from 'react';
import {useTranslation} from 'react-i18next';
import {Field, FormikConfig} from 'formik';
import * as Yup from 'yup';
import {Moment} from 'moment';

import {Form, FieldInput, SubmitButton, FieldDropdown, FieldDate} from '../../../components/form';
import {Language, Pronouns, StudentType} from '../../../generated/graphql';
import {languageOptions, isPhoneNumber} from '../../../util';

export interface IValues {
    firstName: string;
    lastName: string;
    initials: string;
    address: string;
    postalCode: string;
    city: string;
    phoneNumber: string;
    birthdate: Moment | null;
    language: Language;
    pronouns: Pronouns;
    studentType: StudentType;
    email: string;
    password: string;
    passwordRepeat: string;
}

interface IProps {
    onSubmit: FormikConfig<IValues>['onSubmit'];
}

const schema = Yup.object().shape({
    firstName: Yup.string()
        .required('This field is required.'),
    lastName: Yup.string()
        .required('This field is required.'),
    initials: Yup.string()
        .required('This field is required.')
        .matches(/^[a-zA-z. ]+$/, 'Invalid initials, only use letters, dots or spaces.'),
    address: Yup.string()
        .required('This field is required.'),
    postalCode: Yup.string()
        .required('This field is required.'),
    city: Yup.string()
        .required('This field is required.'),
    phoneNumber: Yup.string()
        .required('This field is required.')
        .test('isPhoneNumber', 'Invalid phone number', isPhoneNumber),
    birthdate: Yup.object()
        .nullable()
        .required('This field is required.'),
    language: Yup.string()
        .required('This field is required.')
        .oneOf(Object.values(Language)),
    pronouns: Yup.string()
        .required('This field is required.')
        .oneOf(Object.values(Pronouns)),
    studentType: Yup.string()
        .required('This field is required.')
        .oneOf(Object.values(StudentType)),
    email: Yup.string()
        .required('This field is required.')
        .email('Invalid email address.'),
    password: Yup.string()
        .required('This field is required.')
        .min(8, 'Minimum length is 8 characters.'),
    passwordRepeat: Yup.string()
        .required('This field is required.')
        .min(8, 'Minimum length is 8 characters.')
        .oneOf([Yup.ref('password'), null], 'Passwords do not match.')
});

const RegisterForm = ({onSubmit}: IProps) => {
    const {t} = useTranslation();

    return (
        <Form<IValues>
            initialValues={{
                firstName: '',
                initials: '',
                lastName: '',
                address: '',
                postalCode: '',
                city: '',
                phoneNumber: '',
                birthdate: null,
                language: null,
                pronouns: null,
                studentType: null,
                email: '',
                password: '',
                passwordRepeat: ''
            }}
            validationSchema={schema}
            onSubmit={onSubmit}
        >
            <Field component={FieldInput} name="firstName" type="text" label={t('members:member.firstName', 'First name')} autoComplete="given-name" />
            <p>
                <i>{t('account:profile.information.firstNameRemark', 'Preferred first name, not necessarily legal first name.')}</i>
            </p>

            <Field component={FieldInput} name="initials" type="text" label={t('members:member.initials', 'Initials')} autoComplete="off" />
            <p>
                <i>{t('account:profile.information.initialsRemark', 'Legal initials.')}</i>
            </p>

            <Field component={FieldInput} name="lastName" type="text" label={t('members:member.lastName', 'Last name')} autoComplete="family-name" />

            <Field component={FieldInput} name="address" type="text" label={t('members:member.address', 'Address')} autoComplete="address-line1" />
            <Field component={FieldInput} name="postalCode" type="text" label={t('members:member.postalCode', 'Postal code')} autoComplete="postal-code" />
            <Field component={FieldInput} name="city" type="text" label={t('members:member.city', 'City')} autoComplete="address-level2" />
            {/* TODO: country */}

            <Field component={FieldInput} name="email" type="text" label={t('members:member.email', 'Email address')} autoComplete="email" />
            <Field component={FieldInput} name="phoneNumber" type="text" label={t('members:member.phoneNumber', 'Phone number')} autoComplete="tel" />
            <Field component={FieldDate} name="birthdate" label={t('members:member.birthdate', 'Date of birth')} autoComplete="bday" />

            <Field
                component={FieldDropdown}
                name="language"
                label={t('members:member.language', 'Language')}
                options={languageOptions}
                autoComplete="language"
            />
            <Field
                component={FieldDropdown}
                name="pronouns"
                label={t('members:member.pronouns', 'Pronouns')}
                options={Object.values(Pronouns).map((pronoun) => ({
                    key: pronoun,
                    value: pronoun,
                    text: t(`members:member.pronounTypes.${pronoun}`)
                }))}
            />
            <Field
                component={FieldDropdown}
                name="studentType"
                label={t('members:member.studentType', 'Student type')}
                options={Object.values(StudentType).map((type) => ({
                    key: type,
                    value: type,
                    text: t(`members:member.studentTypes.${type}`)
                }))}
            />

            <Field
                component={FieldInput}
                name="password"
                type="password"
                label={t('members:member.password', 'Password')}
                autoComplete="new-password"
            />
            <Field
                component={FieldInput}
                name="passwordRepeat"
                type="password"
                label={t('members:member.passwordRepeat', 'Repeat password')}
                autoComplete="new-password"
            />

            {/* TODO: terms and conditions checkbox */}

            <SubmitButton color="blue">
                {t('auth:register.submit', 'Complete registration')}
            </SubmitButton>
        </Form>
    );
};

export default RegisterForm;
