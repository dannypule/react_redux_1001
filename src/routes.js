import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import UsersPage from './components/UsersPage/UsersPage.js';
import AboutPage from './components/AboutPage/AboutPage.js';
// import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={UsersPage}/>
    <Route path="about" component={AboutPage}/>
  </Route>
);
