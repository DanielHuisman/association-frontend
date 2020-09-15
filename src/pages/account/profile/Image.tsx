import React from 'react';
import {useTranslation} from 'react-i18next';
import {Header} from 'semantic-ui-react';

import {FormPage} from '../../../components/page/FormPage';
import {
    GetProfileQuery,
    GetProfileQueryVariables,
    UploadUserImageMutation
} from '../../../generated/graphql';
import GetProfile from '../../../queries/GetProfile.graphql';
import UploadUserImage from '../../../mutations/UploadUserImage.graphql';
import {updateQuery} from '../../../util';

import ImageForm, {IValues} from './ImageForm';

const Image = () => {
    const {t} = useTranslation();

    const update = updateQuery<UploadUserImageMutation, GetProfileQuery, GetProfileQueryVariables>(GetProfile, {}, ({uploadUserImage: image}, {me}) => ({
        me: {
            ...me,
            image
        }
    }));

    return (
        <>
            <Header size="large">{t('account:profile.image.header', 'Image')}</Header>

            <FormPage<GetProfileQuery, UploadUserImageMutation, IValues>
                query={GetProfile}
                mutation={UploadUserImage}
                mutationProps={{update}}

                data={({file}, {data}) => ({
                    variables: {
                        data: {
                            user: {
                                id: data.me.id
                            },
                            name: `Profile image (${data.me.name})`
                        },
                        file
                    }
                })}

                success={t('account:profile.image.success', 'Successfully changed your profile image.')}
                failure={t('account:profile.image.failure', 'Failed to change your profile image.')}
            >
                {(handleSubmit, {data: profileData}, {loading}) => (
                    <>
                        {!loading && <ImageForm profile={profileData.me} onSubmit={handleSubmit} />}
                    </>
                )}
            </FormPage>
        </>
    );
};

export default Image;
