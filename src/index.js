import React from 'react';
import { render } from 'react-dom';
//import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router';

import App from './components/app';
import ReactResult from './components/react-result';
import NodeResult from './components/node-result';
import AccountSearch from './components/account-search';



//import reducers from './reducers';

//const createStoreWithMiddleware = applyMiddleware()(createStore);

const root = document.getElementById('root');

const router = (
  <Router history={browserHistory}>
      <Redirect from="/" to="/react-result" />

    <Route path="/" component={App}>
        <IndexRoute component={ReactResult} />
        <Route path="/react-result" component={ReactResult}></Route>
        <Route path="/node-result" component={NodeResult}></Route>
        <Route path="/account-search" component={AccountSearch}></Route>
    </Route>
  </Router>
);

render(router, root)
