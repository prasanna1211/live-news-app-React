/*
 * Routes for single source news module
 */
import React from 'react';
import { Route } from 'react-router';
import SingleSourceNews from 'scripts/modules/singleSourceNews/SingleSourceNews.jsx';

const SingleSourceNewsModuleRoutes = (
  <Route path="/" component={SingleSourceNews} />
);

export default SingleSourceNewsModuleRoutes;
