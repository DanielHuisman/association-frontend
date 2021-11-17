import React from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {Container, Header, List} from 'semantic-ui-react';

import {DOCUMENTS} from '../../constants';
import Text from '../../components/text/Text';

const About = () => {
    const {t, i18n} = useTranslation();
    const language = i18n.language.substring(0, 2);

    return (
        <Container>
            <Helmet title={t('general:association.header', 'Association')} />
            <Header size="huge">{t('general:association.header', 'Association')}</Header>

            <Text name="association" />

            <Header size="large">{t('general:association.documents.header', 'Documents')}</Header>
            <List size="large">
                <List.Item>
                    <a href={DOCUMENTS.articlesOfAssociation[language]} target="articlesOfAssociation">
                        {t('general:association.documents.articlesofAssociation', 'Articles of association')}
                    </a>
                </List.Item>
                <List.Item>
                    <a href={DOCUMENTS.houseRegulations[language]} target="houseRegulations">
                        {t('general:association.documents.houseRegulations', 'House regulations')}
                    </a>
                </List.Item>
                <List.Item>
                    <a href={DOCUMENTS.membershipFeeRegulations[language]} target="membershipFeeRegulations">
                        {t('general:association.documents.membershipFeeRegulations', 'Membership fee regulations')}
                    </a>
                </List.Item>
                <List.Item>
                    <a href={DOCUMENTS.privacyPolicy[language]} target="privacyPolicy">
                        {t('general:association.documents.privacyPolicy', 'Privacy policy')}
                    </a>
                </List.Item>
            </List>
        </Container>
    );
};

export default About;
