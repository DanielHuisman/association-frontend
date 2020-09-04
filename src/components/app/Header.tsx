import React from 'react';

import {MemberFragment} from '../../generated/graphql';
import Topbar from '../navigation/Topbar';

interface IProps {
    user?: MemberFragment;
    onSidebar?: () => void;
}

const Header = ({user, onSidebar}: IProps) => (
    <header>
        <Topbar user={user} onSidebar={onSidebar} />
    </header>
);

export default Header;
