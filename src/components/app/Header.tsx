import React from 'react';

import {MemberFragment} from '../../generated/graphql';
import {Topbar} from '../navigation/Topbar';

export interface HeaderProps {
    user?: MemberFragment;
    onSidebar?: () => void;
}

export const Header: React.FC<HeaderProps> = ({user, onSidebar}) => (
    <header>
        <Topbar user={user} onSidebar={onSidebar} />
    </header>
);
