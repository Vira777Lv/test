import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from '../routes';

function run() {
  const rootElement = document.getElementById('app');

  render(
    <Router history={browserHistory} routes={routes} />,
    rootElement,
  );
}

if (module.hot) {
  module.hot.accept('./views/app/App.js', () => {
    setTimeout(run(), 30000);
  });
}

run();
