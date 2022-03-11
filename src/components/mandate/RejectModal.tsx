import React from 'react';
import {useTranslation} from 'react-i18next';
import {Field, FormikConfig} from 'formik';
import {ApolloError} from '@apollo/client';
import * as Yup from 'yup';
import {Modal, ModalProps, Message, Icon} from 'semantic-ui-react';

import {Form, FieldTextArea, SubmitButton} from '../form';
import {translateError} from '../../util';

export interface IValues {
    reason: string;
}

export interface RejectModalProps {
    trigger: ModalProps['trigger'];
    error?: ApolloError;
    onSubmit: FormikConfig<IValues>['onSubmit'];
}

const schema = Yup.object().shape({
    reason: Yup.string().required('This field is required.')
});

export const RejectModal = ({trigger, error, onSubmit}) => {
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
                    {error && (
                        <Message error visible>
                            <Message.Header>
                                {t('mandates:mandate.review.error.header', 'Failed to reject mandate')}
                            </Message.Header>
                            <Message.Content>
                                {translateError(t, error)}
                            </Message.Content>
                        </Message>
                    )}

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
