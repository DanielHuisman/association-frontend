import React from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {Link, useSearchParams} from 'react-router-dom';
import {Container, Header, Menu} from 'semantic-ui-react';

import {List} from './List';
import {ReviewList} from './ReviewList';

export const Mandates: React.FC = () => {
    const [searchParams] = useSearchParams();
    const {t} = useTranslation();

    const isReview = searchParams.get('filter') === 'review';

    return (
        <Container>
            <Helmet title={t('mandates:mandates.header', 'Mandates')} />
            <Header size="huge">{t('mandates:mandates.header', 'Mandates')}</Header>

            <Menu>
                <Menu.Item as={Link} to="/mandates" active={!isReview}>
                    {t('mandates:mandates.menu.all', 'All')}
                </Menu.Item>
                <Menu.Item as={Link} to="/mandates" active={isReview}>
                    {t('mandates:mandates.menu.review', 'Ready for review')}
                </Menu.Item>
            </Menu>

            {!isReview && <List />}
            {isReview && <ReviewList />}
        </Container>
    );
};
