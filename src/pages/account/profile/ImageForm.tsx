import React from 'react';
import {useTranslation} from 'react-i18next';
import {Field, FormikConfig} from 'formik';

import {Form, SubmitButton, FieldFile} from '../../../components/form';
import MemberImage from '../../../components/member/MemberImage';

export interface IValues {
    file: File;
}

interface IProps {
    profile: any;
    onSubmit: FormikConfig<IValues>['onSubmit'];
}

const ImageForm = ({profile, onSubmit}: IProps) => {
    const {t} = useTranslation();

    return (
        <Form<IValues>
            initialValues={{
                file: null
            }}
            onSubmit={onSubmit}
        >
            <MemberImage member={profile} style={{marginBottom: '1rem'}} />
            <Field component={FieldFile} name="file" />

            <SubmitButton color="blue">
                {t('account:profile.image.update', 'Update profile image')}
            </SubmitButton>
        </Form>
    );
};

export default ImageForm;