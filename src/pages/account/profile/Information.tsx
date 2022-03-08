import React from 'react';
import {useTranslation} from 'react-i18next';
import {Header} from 'semantic-ui-react';
import omit from 'lodash.omit';

import {FormPage} from '../../../components/page/FormPage';
import {GetProfileQuery, UpdateMemberMutation} from '../../../generated/graphql';
import GetProfile from '../../../queries/GetProfile.graphql';
import UpdateMember from '../../../mutations/UpdateMember.graphql';

import InformationForm, {IValues} from './InformationForm';

const Information = () => {
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
                        data: omit({
                            ...values,
                            birthdate: values.birthdate.format('YYYY-MM-DD')
                        }, [
                            '__typename', 'id', 'email', 'isAdmin', 'image', 'providers', 'hasMandate', 'hasPendingPaperMandates'
                        ])
                    }
                })}

                success={t('account:profile.information.success', 'Successfully changed your profile.')}
                failure={t('account:profile.information.failure', 'Failed to change your profile.')}
            >
                {(handleSubmit, {loading, data}) => (
                    <>
                        {!loading && <InformationForm profile={data.me} onSubmit={handleSubmit} />}
                    </>
                )}
            </FormPage>
        </>
    );
};

export default Information;
