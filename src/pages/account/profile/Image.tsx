import React from 'react';
import {useTranslation} from 'react-i18next';
import {Header} from 'semantic-ui-react';

import {FormPage} from '../../../components/page/FormPage';
import {GetProfileQuery, UploadMemberImageMutation} from '../../../generated/graphql';
import GetProfile from '../../../queries/GetProfile.graphql';
import UploadMemberImage from '../../../mutations/UploadMemberImage.graphql';

import ImageForm, {IValues} from './ImageForm';

const Image = () => {
    const {t} = useTranslation();

    return (
        <>
            <Header size="large">{t('account:profile.image.header', 'Image')}</Header>

            <FormPage<GetProfileQuery, UploadMemberImageMutation, IValues>
                query={GetProfile}
                mutation={UploadMemberImage}

                data={({file}, {data}) => ({
                    variables: {
                        member: {
                            id: data.me.id
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
