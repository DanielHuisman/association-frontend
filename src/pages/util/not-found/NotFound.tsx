import React from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import {Container, Header, Button} from 'semantic-ui-react';

const NotFound = () => {
    const {t} = useTranslation();

    return (
        <Container>
            <Helmet title={t('general:notFound.header', 'Page not found')} />
            <Header size="huge">{t('general:notFound.header', 'Page not found')}</Header>

            <Button as={Link} to="/" color="pink">
                {t('general:notFound.button', 'Go to home page')}
            </Button>
        </Container>
    );
};

export default NotFound;
