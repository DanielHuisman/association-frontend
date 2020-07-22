import React from 'react';
import {useTranslation} from 'react-i18next';
import {Link, NavLink} from 'react-router-dom';
import {Menu, Dropdown, Button, Icon} from 'semantic-ui-react';

import {UserFragment, Role} from '../../generated/graphql';

import LanguageMenuItem from './LanguageMenuItem';
import styles from './Navigation.css';
import LogoMenuItem from './LogoMenuItem';

interface IProps {
    user?: UserFragment;
    sidebar?: boolean;
    onClick?: () => void;
}

const Base = ({user, sidebar = false, onClick}: IProps) => {
    const {t} = useTranslation();

    return (
        <>
            <Menu.Menu position="left">
                <LogoMenuItem className={sidebar ? styles.sidebarLogo : null} onClick={onClick} />

                <Menu.Item as={NavLink} exact to="/" onClick={onClick}>
                    {t('general:home.header', 'Home')}
                </Menu.Item>
                <Dropdown text={t('general:association.header', 'Association')} item>
                    <Dropdown.Menu>
                        <Dropdown.Item as={NavLink} exact to="/association" onClick={onClick}>
                            {t('general:association.header', 'Association')}
                        </Dropdown.Item>
                        <Dropdown.Item as={NavLink} exact to="/association/board" onClick={onClick}>
                            {t('general:association.board.header', 'Board')}
                        </Dropdown.Item>
                        <Dropdown.Item as={NavLink} exact to="/association/committees" onClick={onClick}>
                            {t('general:association.committees.header', 'Committees')}
                        </Dropdown.Item>
                        <Dropdown.Item as={NavLink} exact to="/association/collaborations" onClick={onClick}>
                            {t('general:association.collaborations.header', 'Collaborations')}
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Menu.Item as={NavLink} exact to="/calendar" onClick={onClick}>
                    {t('events:calendar.header', 'Calendar')}
                </Menu.Item>
                <Menu.Item as={NavLink} exact to="/contact" onClick={onClick}>
                    {t('general:contact.header', 'Contact')}
                </Menu.Item>

                {user && user.role === Role.ADMIN && (
                    <Dropdown text={t('general:administration.header', 'Administration')} item>
                        <Dropdown.Menu>
                            <Dropdown.Item as={NavLink} exact to="/users" onClick={onClick}>
                                {t('users:users.header', 'Users')}
                            </Dropdown.Item>
                            <Dropdown.Item as={NavLink} exact to="/members" onClick={onClick}>
                                {t('members:members.header', 'Members')}
                            </Dropdown.Item>
                            <Dropdown.Item as={NavLink} exact to="/mandates" onClick={onClick}>
                                {t('mandates:mandates.header', 'Mandates')}
                            </Dropdown.Item>
                            <Dropdown.Item as={NavLink} exact to="/direct-debits" onClick={onClick}>
                                {t('directDebits:directDebits.header', 'Direct debits')}
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                )}
            </Menu.Menu>

            {!user && (
                <Menu.Menu position="right">
                    <Menu.Item onClick={onClick}>
                        <Button as={Link} to="/join" color="pink" onClick={onClick}>
                            {t('general:join.header', 'Become a member')}
                        </Button>
                    </Menu.Item>
                    <Menu.Item as={NavLink} exact to="/sign-in" onClick={onClick}>
                        {t('auth:login.header', 'Sign in')}
                    </Menu.Item>
                    <LanguageMenuItem />
                </Menu.Menu>
            )}
            {user && (
                <Menu.Menu position="right">
                    <Menu.Item as={NavLink} exact to="/account" onClick={onClick}>
                        <Icon name="user" />
                        {user.name}
                    </Menu.Item>
                    <Menu.Item as={NavLink} exact to="/sign-out" onClick={onClick}>
                        {t('auth:logout.header', 'Sign out')}
                    </Menu.Item>
                    <LanguageMenuItem />
                </Menu.Menu>
            )}
        </>
    );
};

export default Base;
