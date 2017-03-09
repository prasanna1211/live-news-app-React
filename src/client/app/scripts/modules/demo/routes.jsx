/*
 * Routes for demo module
 */
import React from 'react';
import { Route } from 'react-router';
import App from './components/presentational/App.jsx';

const DemoModuleRoutes = (
  <Route path="/demo" component={App} />
);

export default DemoModuleRoutes;
