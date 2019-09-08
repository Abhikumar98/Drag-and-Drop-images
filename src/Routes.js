import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/App';
import DisplayImages from './components/DisplayImages';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/displayimage' component={DisplayImages} />
        </Switch>
    </Router>
)

export default Routes;