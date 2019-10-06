import React from 'react';

import Topbar from '../navigation/Topbar';

interface IProps {
    user: any;
    onSidebar?: () => void;
}

const Header = ({user, onSidebar}: IProps) => (
    <header>
        <Topbar user={user} onSidebar={onSidebar} />
    </header>
);

export default Header;
