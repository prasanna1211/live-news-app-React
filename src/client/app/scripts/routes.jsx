/*
 * Define routes for the project.
 */
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// import layout
import Layout from 'scripts/modules/layout/Layout.jsx';

// Composed routes for demo module
import DemoRoutes from 'scripts/modules/demo/routes.jsx';

const Routes = () => (
  <Router history={browserHistory}>
    <Route component={Layout}>
      { DemoRoutes }
    </Route>
  </Router>
);

export default Routes;
