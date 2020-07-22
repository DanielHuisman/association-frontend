import React from 'react';
import {Helmet} from 'react-helmet';
import {Container, Header} from 'semantic-ui-react';
import {useTranslation} from 'react-i18next';

import Text from '../../components/text/Text';

const Collaborations = () => {
    const {t} = useTranslation();

    return (
        <Container>
            <Helmet title={t('general:association.collaborations.header', 'Collaborations')} />
            <Header size="huge">{t('general:association.collaborations.header', 'Collaborations')}</Header>

            <Text name="collaborations" />
        </Container>
    );
};

export default Collaborations;
