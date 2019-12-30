import React from 'react';
import {useTranslation} from 'react-i18next';
import {Link, NavLink} from 'react-router-dom';
import {Responsive, Menu, Icon} from 'semantic-ui-react';

import Base from './Base';

interface IProps {
    user: any;
    onSidebar?: () => void;
}

const Topbar = ({user, onSidebar}: IProps) => {
    const {t} = useTranslation();

    return (
        <>
            <Responsive maxWidth={991}>
                <Menu size="huge" fixed="top" inverted>
                    <Menu.Menu position="left">
                        <Menu.Item onClick={onSidebar}>
                            <Icon name="bars" fitted />
                        </Menu.Item>
                        <Menu.Item as={Link} to="/" header>J&SV Exaltio</Menu.Item>
                    </Menu.Menu>
                </Menu>
            </Responsive>

            <Responsive minWidth={992}>
                <Menu size="huge" fixed="top" inverted>
                    <Menu.Menu position="left">
                        <Base user={user} />
                    </Menu.Menu>

                    {!user && (
                        <Menu.Menu position="right">
                            <Menu.Item as={NavLink} to="/login">
                                <Icon name="sign-in" />
                                {t('auth:login.header', 'Sign in')}
                            </Menu.Item>
                        </Menu.Menu>
                    )}

                    {user && (
                        <Menu.Menu position="right">
                            <Menu.Item fitted="vertically">
                                {user.name}
                            </Menu.Item>
                            <Menu.Item as={NavLink} to="/logout">
                                <Icon name="sign-out" />
                                {t('auth:logout.header', 'Sign out')}
                            </Menu.Item>
                        </Menu.Menu>
                    )}
                </Menu>
            </Responsive>
        </>
    );
};

export default Topbar;
