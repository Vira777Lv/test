import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'views/app/App';


function loadRoute(cb) {
  return (module) => cb(null, module.default);
}

const routes = {
  component: App,
  childRoutes: [
    {
      path: '/',
      getComponent(location, cb) {
        System.import('views/tabs/DummyList')
          .then(loadRoute(cb))
      }
    },
    {
      path: 'dummyList',
      getComponent(location, cb) {
        System.import('views/tabs/DummyList')
          .then(loadRoute(cb))
      }
    },
    {
      path: 'dummyChart',
      getComponent(location, cb) {
        System.import('views/tabs/DummyChart')
          .then(loadRoute(cb))
      }
    },
    {
      path: 'dummyTable',
      getComponent(location, cb) {
        System.import('views/tabs/DummyTable')
          .then(loadRoute(cb))
      }
    },
  ]
};

export default routes;
