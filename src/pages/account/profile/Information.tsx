import React from 'react';
import {useTranslation} from 'react-i18next';
import {Header} from 'semantic-ui-react';
import omit from 'lodash.omit';

import {FormPage} from '../../../components/page/FormPage';
import {Spoiler} from '../../../components/util/Spoiler';
import {GetProfileQuery, UpdateMemberMutation} from '../../../generated/graphql';
import GetProfile from '../../../queries/GetProfile.graphql';
import UpdateMember from '../../../mutations/UpdateMember.graphql';

import {InformationForm, IValues} from './InformationForm';

export const Information: React.FC = () => {
    const {t} = useTranslation();

    return (
        <>
            <Header size="large">{t('account:profile.information.header', 'Information')}</Header>

            <FormPage<GetProfileQuery, UpdateMemberMutation, IValues>
                query={GetProfile}
                mutation={UpdateMember}

                data={(values, {data}) => ({
                    variables: {
                        where: {
                            id: data.me.id
                        },
                        data: omit(values, [
                            '__typename', 'id', 'email', 'isAdmin', 'image', 'providers', 'hasMandate', 'hasPendingPaperMandates'
                        ])
                    }
                })}

                success={t('account:profile.information.success', 'Successfully changed your profile.')
                /* TODO: add extra line describing that the board has to approve the membership */}
                failure={t('account:profile.information.failure', 'Failed to change your profile.')}
            >
                {(handleSubmit, {loading, data}) => (
                    <Spoiler open={!loading}>
                        <InformationForm profile={data.me} onSubmit={handleSubmit} />
                    </Spoiler>
                )}
            </FormPage>
        </>
    );
};
