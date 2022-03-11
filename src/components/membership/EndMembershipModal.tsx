import React from 'react';
import {useTranslation} from 'react-i18next';
import {Field, FormikConfig} from 'formik';
import {ApolloError} from '@apollo/client';
import * as Yup from 'yup';
import {Modal, ModalProps, Message, Icon} from 'semantic-ui-react';
import moment from 'moment';

import {Form, FieldInput, SubmitButton} from '../form';
import {translateError} from '../../util';

export interface IValues {
    date: string;
}

export interface EndMembershipModalProps {
    trigger: ModalProps['trigger'];
    error?: ApolloError;
    onSubmit: FormikConfig<IValues>['onSubmit'];
}

const schema = Yup.object().shape({
    date: Yup.string().nullable().required('This field is required.')
});

export const EndMembershipModal: React.FC<EndMembershipModalProps> = ({trigger, error, onSubmit}) => {
    const {t} = useTranslation();

    return (
        <Modal size="small" trigger={trigger} closeIcon>
            <Modal.Header>{t('members:membership.end.button', 'End membership')}</Modal.Header>
            <Modal.Content>
                <Form<IValues>
                    initialValues={{
                        date: moment().format('YYYY-MM-DD')
                    }}
                    validationSchema={schema}
                    onSubmit={onSubmit}
                >
                    {error && (
                        <Message error visible>
                            <Message.Header>
                                {t('members:membership.end.error.header', 'Failed to end membership')}
                            </Message.Header>
                            <Message.Content>
                                {translateError(t, error)}
                            </Message.Content>
                        </Message>
                    )}

                    <Field component={FieldInput} name="date" type="date" label={t('members:membership.end.date', 'End of membership date')} />

                    <SubmitButton color="red">
                        <Icon name="times" />
                        {t('members:membership.end.button', 'End membership')}
                    </SubmitButton>
                </Form>
            </Modal.Content>
        </Modal>
    );
};
