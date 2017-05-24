import React from 'react';
import { render } from 'react-dom';
//import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import ReactResult from './components/react-result';

//import reducers from './reducers';

//const createStoreWithMiddleware = applyMiddleware()(createStore);

const root = document.getElementById('root');

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={ReactResult}></IndexRoute>

    </Route>
  </Router>
);

render(router, root)
