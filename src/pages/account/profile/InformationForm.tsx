import React from 'react';
import {useTranslation} from 'react-i18next';
import {Field, FormikConfig} from 'formik';
import * as Yup from 'yup';

import {Form, FieldDropdown, FieldInput, SubmitButton} from '../../../components/form';
import {Language, MemberFragment, Pronouns, ProviderFragment, StudentType} from '../../../generated/graphql';
import {languageOptions, isPhoneNumber} from '../../../util';

export interface IValues {
    firstName: string;
    lastName: string;
    initials: string;
    address: string;
    postalCode: string;
    city: string;
    phoneNumber: string;
    birthdate: string;
    language: Language;
    pronouns: Pronouns;
    studentType: StudentType;
}

export interface InformationFormProps {
    profile: MemberFragment & {
        providers: {
            values: ProviderFragment[];
        };
    };
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
    birthdate: Yup.string()
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
        .oneOf(Object.values(StudentType))
});

export const InformationForm: React.FC<InformationFormProps> = ({profile, onSubmit}) => {
    const {t} = useTranslation();

    return (
        <Form<IValues>
            initialValues={profile}
            validationSchema={schema}
            onSubmit={onSubmit}
        >
            <Field component={FieldInput} name="firstName" type="text" label={t('members:member.firstName', 'First name')} />
            <p>
                <i>{t('account:profile.information.firstNameRemark', 'Preferred first name, not necessarily legal first name.')}</i>
            </p>

            <Field component={FieldInput} name="initials" type="text" label={t('members:member.initials', 'Initials')} />
            <p>
                <i>{t('account:profile.information.initialsRemark', 'Legal initials.')}</i>
            </p>

            <Field component={FieldInput} name="lastName" type="text" label={t('members:member.lastName', 'Last name')} />

            <Field component={FieldInput} name="address" type="text" label={t('members:member.address', 'Address')} />
            <Field component={FieldInput} name="postalCode" type="text" label={t('members:member.postalCode', 'Postal code')} />
            <Field component={FieldInput} name="city" type="text" label={t('members:member.city', 'City')} />
            {/* TODO: country */}

            <Field component={FieldInput} name="phoneNumber" type="text" label={t('members:member.phoneNumber', 'Phone number')} />
            <Field component={FieldInput} name="birthdate" type="date" label={t('members:member.birthdate', 'Date of birth')} />

            <Field
                component={FieldDropdown}
                name="language"
                label={t('members:member.language', 'Language')}
                options={languageOptions}
            />
            <Field
                component={FieldDropdown}
                name="pronouns"
                label={t('members:member.pronouns', 'Prefered pronouns')}
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

            <SubmitButton color="blue">
                {t('account:profile.information.update', 'Update profile information')}
            </SubmitButton>
        </Form>
    );
};
