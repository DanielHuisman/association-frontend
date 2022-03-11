import React from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {Container, Header} from 'semantic-ui-react';

import {DocumentList} from '../../components/association/DocumentList';
import {Text} from '../../components/text/Text';

export const About: React.FC = () => {
    const {t} = useTranslation();

    return (
        <Container>
            <Helmet title={t('general:association.header', 'Association')} />
            <Header size="huge">{t('general:association.header', 'Association')}</Header>

            <Text name="association" />

            <Header size="large">{t('general:association.documents.header', 'Documents')}</Header>
            <DocumentList />
        </Container>
    );
};
