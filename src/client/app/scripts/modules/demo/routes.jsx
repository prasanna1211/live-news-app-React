/*
 * Routes for demo module
 */
import React from 'react';
import { Route } from 'react-router';
import App from 'scripts/modules/demo/components/presentational/App.jsx';

const DemoModuleRoutes = (
  <Route path="/" component={App} />
);

export default DemoModuleRoutes;
