import React from 'react';
import {useTranslation} from 'react-i18next';
import {Message, Icon} from 'semantic-ui-react';
import {Field} from 'formik';

import {FieldFile} from '../../components/form';
import CancelButton from '../../components/mandate/CancelButton';
import {Form, SubmitButton} from '../form';
import {MutationFormPage} from '../page';
import {UploadPaperMandateMutation} from '../../generated/graphql';
import UploadPaperMandate from '../../mutations/UploadPaperMandate.graphql';

interface IProps {
    paperMandateId: string;
}

interface IValues {
    file: File;
}

const PaperMandateForm = ({paperMandateId}: IProps) => {
    const {t} = useTranslation();

    return (
        <MutationFormPage<UploadPaperMandateMutation, IValues>
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
            {(handleSubmit, mutationResult) => (
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

                    <CancelButton mandateId={paperMandateId} />
                </Form>
            )}
        </MutationFormPage>
    );
};

export default PaperMandateForm;
