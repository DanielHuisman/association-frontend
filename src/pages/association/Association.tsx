import React from 'react';
import {Switch, Route, RouteComponentProps} from 'react-router-dom';

import About from './About';
import Board from './Board';
import Committees from './Committees';
import Collaborations from './Collaborations';

const Association = ({match}: RouteComponentProps) => {
    return (
        <Switch>
            <Route exact path={`${match.url}/`} component={About} />
            <Route exact path={`${match.url}/board`} component={Board} />
            <Route exact path={`${match.url}/committees`} component={Committees} />
            <Route exact path={`${match.url}/collaborations`} component={Collaborations} />
        </Switch>
    );
};

export default Association;
