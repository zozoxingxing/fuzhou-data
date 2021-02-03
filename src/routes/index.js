
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Home from '../pages/Home'
import About from '../pages/About'
import Login from '../pages/Login'
import Regisrer from '../pages/Register'
import Header from '../components/header'
import NewsItem from '../pages/News'

export default class route extends Component {
    render() {
      return (
      <Router>
        <Header/>
        <Route path="/" render={() => (<Redirect to="/home" />)} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/media" component={Login} />
        <Route path="/register" component={Regisrer} />
        <Route path="/news" component={NewsItem} />
      </Router>)
    }
}
