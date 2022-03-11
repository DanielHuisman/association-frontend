import React from 'react';
import {Route, Routes} from 'react-router-dom';

import {About} from './About';
import {Board} from './Board';
import {Committees} from './Committees';
import {Collaborations} from './Collaborations';

export const Association: React.FC = () => {
    return (
        <Routes>
            <Route index element={<About />} />
            <Route path="board" element={<Board />} />
            <Route path="committees" element={<Committees />} />
            <Route path="collaborations" element={<Collaborations />} />
        </Routes>
    );
};
