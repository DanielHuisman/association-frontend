import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Menu, Icon} from 'semantic-ui-react';

import {Role} from '../../types/generatedTypes';

interface IProps {
    user?: any;
    onClick?: () => void;
}

const Base = ({user, onClick}: IProps) => (
    <>
        <Menu.Item as={Link} to="/" header onClick={onClick}>
            J&SV Exaltio
        </Menu.Item>
        {user && user.role === Role.ADMIN && (
            <>
                <Menu.Item as={NavLink} to="/users" onClick={onClick}>
                    <Icon name="users" />
                    Users
                </Menu.Item>
                <Menu.Item as={NavLink} to="/members" onClick={onClick}>
                    <Icon name="users" />
                    Members
                </Menu.Item>
            </>
        )}
    </>
);

export default Base;
