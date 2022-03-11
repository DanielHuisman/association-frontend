import React from 'react';
import {Helmet} from 'react-helmet';
import {useTranslation} from 'react-i18next';
import {Link, useSearchParams} from 'react-router-dom';
import {Container, Header, Menu} from 'semantic-ui-react';

import {List} from './List';

enum Filter {
    CURRENT = 'current',
    NEW = 'new',
    OLD = 'old'
}

const FILTER_VALUES: string[] = Object.values(Filter);

export const Members: React.FC = () => {
    const [searchParams] = useSearchParams();
    const {t} = useTranslation();

    const filter = FILTER_VALUES.includes(searchParams.get('filter')) ? searchParams.get('filter') : Filter.CURRENT;

    return (
        <Container>
            <Helmet title={t('members:members.header', 'Members')} />
            <Header size="huge">{t('members:members.header', 'Members')}</Header>

            <Menu>
                <Menu.Item as={Link} to="/members" active={filter === Filter.CURRENT}>
                    {t('members:members.menu.current', 'Current members')}
                </Menu.Item>
                <Menu.Item as={Link} to="/members?filter=new" active={filter === Filter.NEW}>
                    {t('members:members.menu.new', 'New members')}
                </Menu.Item>
                <Menu.Item as={Link} to="/members?filter=old" active={filter === Filter.OLD}>
                    {t('members:members.menu.old', 'Old members')}
                </Menu.Item>
            </Menu>

            {filter === Filter.CURRENT && (
                <List filter={(member) => !member.latestMembership.endedAt && member.latestMembership.isAccepted} showMandatesCounter />
            )}

            {filter === Filter.NEW && (
                <List filter={(member) => !member.latestMembership.endedAt && !member.latestMembership.isAccepted} showMandatesCounter />
            )}

            {filter === Filter.OLD && (
                <List filter={(member) => !!member.latestMembership.endedAt} showMandatesCounter />
            )}
        </Container>
    );
};
