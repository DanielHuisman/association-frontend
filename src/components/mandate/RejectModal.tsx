import React from 'react';
import {useTranslation} from 'react-i18next';
import {Field, FormikConfig} from 'formik';
import * as Yup from 'yup';
import {Modal, ModalProps, Icon} from 'semantic-ui-react';

import {Form, FieldTextArea, SubmitButton} from '../form';

export interface IValues {
    reason: string;
}

interface IProps {
    trigger: ModalProps['trigger'];
    onSubmit: FormikConfig<IValues>['onSubmit'];
}

const schema = Yup.object().shape({
    reason: Yup.string().required('This field is required.')
});

const PaperMandateForm = ({trigger, onSubmit}: IProps) => {
    const {t} = useTranslation();

    return (
        <Modal trigger={trigger} closeIcon>
            <Modal.Header>{t('mandates:mandate.review.reject', 'Reject')}</Modal.Header>
            <Modal.Content>
                <Form<IValues>
                    initialValues={{
                        reason: ''
                    }}
                    validationSchema={schema}
                    onSubmit={onSubmit}
                >
                    <Field component={FieldTextArea} name="reason" rows="5" label={t('mandates:mandate.review.reason', 'Reason')} />
                    <SubmitButton color="red">
                        <Icon name="times" />
                        {t('mandates:mandate.review.reject', 'Reject')}
                    </SubmitButton>
                </Form>
            </Modal.Content>
        </Modal>
    );
};

export default PaperMandateForm;
