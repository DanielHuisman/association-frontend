import React from 'react';
import {Container, Responsive, Menu, Icon} from 'semantic-ui-react';

import {MemberFragment} from '../../generated/graphql';

import {Base} from './Base';
import {LanguageMenuItem} from './LanguageMenuItem';
import {LogoMenuItem} from './LogoMenuItem';

export interface TopbarProps {
    user?: MemberFragment;
    onSidebar?: () => void;
}

export const Topbar: React.FC<TopbarProps> = ({user, onSidebar}: TopbarProps) => (
    <>
        <Responsive maxWidth={991}>
            <Menu size="large" fixed="top">
                <Menu.Menu position="left">
                    <Menu.Item onClick={onSidebar}>
                        <Icon name="bars" fitted />
                    </Menu.Item>

                    <LogoMenuItem />
                </Menu.Menu>
                <Menu.Menu position="right">
                    <LanguageMenuItem />
                </Menu.Menu>
            </Menu>
        </Responsive>

        <Responsive minWidth={992}>
            <Menu
                size="large"
                fixed="top"
            >
                <Container>
                    <Base user={user} />
                </Container>
            </Menu>
        </Responsive>
    </>
);
