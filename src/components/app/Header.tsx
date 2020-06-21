import React from 'react';

import {UserFragment} from '../../generated/graphql';
import Topbar from '../navigation/Topbar';

interface IProps {
    user?: UserFragment;
    onSidebar?: () => void;
}

const Header = ({user, onSidebar}: IProps) => (
    <header>
        <Topbar user={user} onSidebar={onSidebar} />
    </header>
);

export default Header;
