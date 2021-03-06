import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Marvel from './components/Marvel/Marvel';
import Dc from './components/Dc/Dc';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/marvel' component={Marvel} />
        <Route path='/dc' component={Dc} />
    </Switch>
)