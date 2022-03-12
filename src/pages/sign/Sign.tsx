import React from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {Route, Routes} from 'react-router-dom';
import {Container, Header} from 'semantic-ui-react';

import {Intro} from './Intro';
import {Digital} from './Digital';
import {Paper} from './Paper';

export const Sign: React.FC = () => {
    const {t} = useTranslation();

    return (
        <Container>
            <Helmet title={t('mandates:sign.header', 'Sign mandate')} />
            <Header size="huge">{t('mandates:sign.header', 'Sign mandate')}</Header>

            <Routes>
                <Route index element={<Intro />} />
                <Route path="digital" element={<Digital />} />
                <Route path="paper" element={<Paper />} />
            </Routes>
        </Container>
    );
};
