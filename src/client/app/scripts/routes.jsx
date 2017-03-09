/*
 * Define routes for the project.
 */
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// import layout
import Layout from 'scripts/modules/layout/Layout.jsx';

// Composed routes for Single Source module
import SingleSourceNewsRoutes from 'scripts/modules/singleSourceNews/routes.jsx';

// demo module route
import App from 'scripts/modules/demo/components/presentational/App.jsx';

const Routes = () => (
  <Router history={browserHistory}>
    <Route component={Layout}>
      <Route path="/demos" component={App} />
      { SingleSourceNewsRoutes }
    </Route>
  </Router>
);

export default Routes;
