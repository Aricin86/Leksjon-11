import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import NoMatch from '../components/NoMatch';
import Overview from '../pages/Overview';
import Register from '../pages/Register';
import CreatePoll from '../pages/CreatePoll';

const Routes = () => (
  <Router>
    <MainLayout>
      <Switch>
        <Route exact path="/">
          <Overview />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/createpoll">
          <CreatePoll />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </MainLayout>
  </Router>
);

export default Routes;
