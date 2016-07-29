import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, browserHistory, IndexRoute } from 'react-router';
// import {render} from 'react-dom'

import App from './components/App';
import Welcome from './components/Welcome';
import Tenants from './components/Tenants';
import Properties from './components/Properties';
// render(
// <App />,
// document.getElementById('root')
// )

ReactDOM.render(
  // <h1>Hello from HMRE</h1>,
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Welcome} />
      <Route path="tenants" component={Tenants} />
      <Route path="properties" component={Properties} />
    </Route>
  </Router>,
  document.getElementById('root')
);
