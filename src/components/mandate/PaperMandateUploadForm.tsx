import React from 'react';
import {useTranslation} from 'react-i18next';
import {RouteComponentProps} from 'react-router-dom';
import {Message, Icon} from 'semantic-ui-react';
import {Field} from 'formik';

import {FieldFile} from '../../components/form';
import UploadPaperMandate from '../../mutations/UploadPaperMandate.graphql';
import {UploadPaperMandate as UploadPaperMandateType} from '../../types/generatedTypes';
import {Form, SubmitButton} from '../form';
import {MutationFormPage} from '../page';

interface IProps {
    paperMandateId: string;
    history: RouteComponentProps['history'];
}

interface IValues {
    file: File;
}

const PaperMandateForm = ({paperMandateId, history}: IProps) => {
    const {t} = useTranslation();

    return (
        <MutationFormPage<UploadPaperMandateType, IValues>
            mutation={UploadPaperMandate}

            loader={false}
            data={({file}) => {
                return {
                    variables: {
                        data: {
                            name: file.name,
                            paperMandate: {
                                id: paperMandateId
                            }
                        },
                        file
                    }
                };
            }}
        >
            {(handleSubmit, mutationResult) => {
                if (mutationResult.data && mutationResult.data.uploadPaperMandate) {
                    // history.push(`/members/${memberId}/mandates/sign/paper`);
                    // TODO
                }

                return (
                    <Form<IValues>
                        initialValues={{
                            file: null
                        }}
                        onSubmit={handleSubmit}
                    >
                        {mutationResult.error && (
                            <Message error visible>
                                <Message.Header>
                                    {t('mandates:sign.paper.upload.error.header', 'Failed to upload mandate form')}
                                </Message.Header>
                                <Message.Content>
                                    {t('mandates:sign.paper.upload.error.description', 'An error occurred, try again later or contact the board.')}
                                </Message.Content>
                            </Message>
                        )}

                        <Field component={FieldFile} name="file" />

                        <SubmitButton color="blue">
                            <Icon name="upload" />
                            {t('mandates:sign.paper.upload.submit', 'Upload mandate')}
                        </SubmitButton>

                        {/* TODO: cancel button which invalidates the mandate */}
                    </Form>
                );
            }}
        </MutationFormPage>
    );
};

export default PaperMandateForm;
