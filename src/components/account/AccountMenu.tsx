import React from 'react';
import {useTranslation} from 'react-i18next';
import {NavLink} from 'react-router-dom';
import {Menu, Icon} from 'semantic-ui-react';

const AccountMenu = () => {
    const {t} = useTranslation();

    return (
        <Menu fluid vertical size="large">
            <Menu.Item header>Account</Menu.Item>
            <Menu.Item as={NavLink} to="/account/profile">
                <Icon className="left" name="user" />
                {t('account:profile.header', 'Profile')}
            </Menu.Item>
            <Menu.Item as={NavLink} to="/account/security">
                <Icon className="left" name="shield" />
                {t('account:security.header', 'Security')}
            </Menu.Item>
            <Menu.Item as={NavLink} to="/account/mandates">
                <Icon className="left" name="file alternate" />
                {t('account:mandates.header', 'Mandates')}
            </Menu.Item>
        </Menu>
    );
};

export default AccountMenu;
