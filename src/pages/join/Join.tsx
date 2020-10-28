import React from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {Container, Header} from 'semantic-ui-react';

import {FORMS} from '../../constants';
import Text from '../../components/text/Text';

const Join = () => {
    const {t, i18n} = useTranslation();

    return (
        <Container>
            <Helmet title={t('general:join.header', 'Become a member')} />
            <Header size="huge">{t('general:join.header', 'Become a member')}</Header>

            <Text name="join" />

            <iframe
                src={FORMS.join[i18n.language.substring(0, 2) || 'en']}
                style={{width: '100%', height: '4000px'}}
                frameBorder="0"
                scrolling="no"
            />
        </Container>
    );
};

export default Join;
