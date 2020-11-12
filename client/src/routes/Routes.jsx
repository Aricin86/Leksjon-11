import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import NoMatch from '../components/NoMatch';
import Overview from '../pages/Overview';

const Routes = () => (
  <Router>
    <MainLayout>
      <Switch>
        <Route exact path="/">
          <Overview />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </MainLayout>
  </Router>
);

export default Routes;
