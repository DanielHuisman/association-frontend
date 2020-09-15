import React from 'react';
import {useTranslation} from 'react-i18next';
import {Header} from 'semantic-ui-react';

import {Page} from '../../../components/page/Page';
import {GetProfileQuery} from '../../../generated/graphql';
import GetProfile from '../../../queries/GetProfile.graphql';

import InformationForm, {IValues} from './InformationForm';

const Information = () => {
    const {t} = useTranslation();

    return (
        <>
            <Header size="large">{t('account:profile.information.header', 'Information')}</Header>

            <Page<GetProfileQuery> query={GetProfile}>
                {({data}) => {
                    const handleSubmit = (values: IValues) => {
                        console.log(values);
                    };

                    return (
                        <InformationForm profile={data.me} onSubmit={handleSubmit} />
                    );
                }}
            </Page>
        </>
    );
};

export default Information;
