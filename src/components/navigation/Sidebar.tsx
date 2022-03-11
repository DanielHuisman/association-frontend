import React from 'react';
import {Sidebar as SESidebar, Menu} from 'semantic-ui-react';

import {MemberFragment} from '../../generated/graphql';

import {Base} from './Base';
import styles from './Navigation.css';

export interface SidebarProps {
    user?: MemberFragment;
    visible: boolean;
    children: any;
    onHide?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({user, visible, children, onHide}) => (
    <SESidebar.Pushable>
        <SESidebar
            className={styles.sidebar}
            animation="overlay"
            width="thin"
            visible={visible}
            onHide={onHide}
            as={Menu}
            size="huge"
            vertical
        >
            <Base user={user} sidebar onClick={onHide} />
        </SESidebar>
        <SESidebar.Pusher>
            {children}
        </SESidebar.Pusher>
    </SESidebar.Pushable>
);
