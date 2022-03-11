import React from 'react';
import {Link} from 'react-router-dom';
import {Menu, Image, MenuItemProps} from 'semantic-ui-react';

import logo from '../../../public/images/logo_icon_square.svg';

export const LogoMenuItem: React.FC<MenuItemProps> = (props) => (
    <Menu.Item as={Link} to="/" fitted="vertically" header {...props}>
        <Image
            style={{
                width: '48px',
                height: '48px'
            }}
            src={logo}
            size="tiny"
            avatar
        />
        J&SV Exaltio
    </Menu.Item>
);
