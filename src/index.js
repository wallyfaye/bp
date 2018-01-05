import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import Bundle from './Bundle.js'
import About from 'bundle-loader?lazy!./About'

import './style.scss';

import test from './test'

import do_tests from './do_tests.js';

const history = createHistory({ 
  basename: (process.env.NODE_ENV === 'production') ? '/tests/dist' : '/'
})
const middleware = routerMiddleware(history)
const store = createStore(
  combineReducers({
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

const SampleApp = () => (
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
        <hr/>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={loadAbout}/>
    </div>
)

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const loadAbout = () => (
    <Bundle load={About}>
        {(Mod) => (
            <Mod/>
        )}
    </Bundle>
)

var element = document.createElement('div');
element.setAttribute("id", "root");
document.body.appendChild(element);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history} >
      <SampleApp />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

do_tests();