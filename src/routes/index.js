
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Home from '../pages/Home'
import About from '../pages/About'
import Login from '../pages/Login'
import Regisrer from '../pages/Register'
import Header from '../components/header'

export default class route extends Component {
    render() {
      return (
      <Router>
        <Header/>
        <Route path="/" render={() => (<Redirect to="/job" />)} />
        <Route path="/home" component={Home} />
        <Route path="/job" component={About} />
        <Route path="/media" component={Login} />
        <Router path="/register" component={Regisrer} />
      </Router>)
    }
}
