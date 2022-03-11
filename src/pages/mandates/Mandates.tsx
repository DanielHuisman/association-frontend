import React from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {Link, useSearchParams} from 'react-router-dom';
import {Container, Header, Menu} from 'semantic-ui-react';

import {List} from './List';
import {ReviewList} from './ReviewList';

enum Filter {
    ALL = 'all',
    REVIEW = 'review'
}

const FILTER_VALUES: string[] = Object.values(Filter);

export const Mandates: React.FC = () => {
    const [searchParams] = useSearchParams();
    const {t} = useTranslation();

    const filter = FILTER_VALUES.includes(searchParams.get('filter')) ? searchParams.get('filter') : Filter.ALL;

    return (
        <Container>
            <Helmet title={t('mandates:mandates.header', 'Mandates')} />
            <Header size="huge">{t('mandates:mandates.header', 'Mandates')}</Header>

            <Menu>
                <Menu.Item as={Link} to="/mandates" active={filter === Filter.ALL}>
                    {t('mandates:mandates.menu.all', 'All')}
                </Menu.Item>
                <Menu.Item as={Link} to="/mandates?filter=review" active={filter === Filter.REVIEW}>
                    {t('mandates:mandates.menu.review', 'Ready for review')}
                </Menu.Item>
            </Menu>

            {filter === Filter.ALL && <List />}
            {filter === Filter.REVIEW && <ReviewList />}
        </Container>
    );
};
