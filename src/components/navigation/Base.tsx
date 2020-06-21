import React from 'react';
import {useTranslation} from 'react-i18next';
import {Link, NavLink} from 'react-router-dom';
import {Menu, Icon} from 'semantic-ui-react';

import {UserFragment, Role} from '../../generated/graphql';

interface IProps {
    user?: UserFragment;
    onClick?: () => void;
}

const Base = ({user, onClick}: IProps) => {
    const {t} = useTranslation();

    return (
        <>
            <Menu.Item as={Link} to="/" header onClick={onClick}>
                J&SV Exaltio
            </Menu.Item>
            {user && user.role === Role.ADMIN && (
                <>
                    <Menu.Item as={NavLink} to="/users" onClick={onClick}>
                        <Icon name="users" />
                        {t('users:users.header')}
                    </Menu.Item>
                    <Menu.Item as={NavLink} to="/members" onClick={onClick}>
                        <Icon name="users" />
                        {t('members:members.header')}
                    </Menu.Item>
                    <Menu.Item as={NavLink} to="/mandates" onClick={onClick}>
                        <Icon name="signup" />
                        {t('mandates:mandates.header')}
                    </Menu.Item>
                    <Menu.Item as={NavLink} to="/direct-debits" onClick={onClick}>
                        <Icon name="payment" />
                        {t('directDebits:directDebits.header')}
                    </Menu.Item>
                </>
            )}
        </>
    );
};

export default Base;
