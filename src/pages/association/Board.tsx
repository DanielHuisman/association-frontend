import React from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {Container, Header} from 'semantic-ui-react';

import {Text} from '../../components/text/Text';

export const Board: React.FC = () => {
    const {t} = useTranslation();

    return (
        <Container>
            <Helmet title={t('general:association.board.header', 'Board')} />
            <Header size="huge">{t('general:association.board.header', 'Board')}</Header>

            <Text name="board" />
        </Container>
    );
};
