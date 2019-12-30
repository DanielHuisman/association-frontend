import React from 'react';
import {useTranslation} from 'react-i18next';
import {NavLink} from 'react-router-dom';
import {Sidebar as SESidebar, Menu, Icon} from 'semantic-ui-react';

import Base from './Base';

interface IProps {
    user: any;
    visible: boolean;
    children: any;
    onHide?: () => void;
}

const Sidebar = ({user, visible, children, onHide}: IProps) => {
    const {t} = useTranslation();

    return (
        <SESidebar.Pushable>
            <SESidebar
                animation="overlay"
                width="thin"
                visible={visible}
                onHide={onHide}
                as={Menu}
                size="huge"
                icon="labeled"
                vertical
                inverted
            >
                <Menu.Menu>
                    <Base user={user} onClick={onHide} />

                    {!user && (
                        <>
                            <Menu.Item as={NavLink} to="/login">
                                <Icon name="sign-in" />
                                {t('auth:login.header', 'Sign in')}
                            </Menu.Item>
                        </>
                    )}

                    {user && (
                        <>
                            <Menu.Item>
                                {user.name}
                            </Menu.Item>
                            <Menu.Item as="a" href="/logout">
                                <Icon name="sign-out" />
                                {t('auth:logout.header', 'Sign out')}
                            </Menu.Item>
                        </>
                    )}
                </Menu.Menu>
            </SESidebar>
            <SESidebar.Pusher>
                {children}
            </SESidebar.Pusher>
        </SESidebar.Pushable>
    );
};

export default Sidebar;
