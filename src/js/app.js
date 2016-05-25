
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Layout from './pages/layout'
import style from '../css/main.scss';

import Home from './pages/home.js';
import About from './pages/about.js';
import Works from './pages/works.js';
import Labo from './pages/labo.js';
import Contact from './pages/contact.js';


const app = document.querySelector('#app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
    <IndexRoute component={Home}></IndexRoute>
  <Route path='about' component={About}></Route>
<Route path='works' component={Works}></Route>
    <Route path='labo' component={Labo}></Route>
  <Route path='contact' component={Contact}></Route>
    </Route>
  </Router>,
app)
