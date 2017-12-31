import React from 'react'
import { render } from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import Bundle from './Bundle.js'
import About from 'bundle-loader?lazy!./About'

const BasicExample = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <hr/>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={loadAbout}/>
        </div>
    </Router>
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


render(<BasicExample />, document.getElementById('root'));