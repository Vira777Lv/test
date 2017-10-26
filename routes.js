import React from 'react';
import { Route, IndexRoute } from 'react-router';

import DummyList from './src/views/tabs/DummyList';
import DummyTable from './src/views/tabs/DummyTable';
import DummyChart from './src/views/tabs/DummyChart';
import App from './src/views/app/App';
import HomePage from './src/views/homePage/HomePage';
import data from './src/utils/tabs.json';

const tabs = data;

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={HomePage} />
    <Route path={`/${tabs[0].id}`} component={DummyTable} />
    <Route path={`/${tabs[1].id}`} component={DummyChart} />
    <Route path={`/${tabs[2].id}`} component={DummyList} />
  </Route>
);

export default routes;
