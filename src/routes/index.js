/*
 * @Descripttion: 
 * @version: 
 * @Author: Magic
 * @Date: 2020-09-15 21:49:01
 * @LastEditors: Magic
 * @LastEditTime: 2020-09-15 23:31:51
 */
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Home from '../pages/Home'
import About from '../pages/About'
import Login from '../pages/Login'
import Regisrer from '../pages/Register'
import Header from '../components/header'
import Footer from '../components/footer'
import Tips from '../components/tips'

export default class route extends Component {
    render() {
        return (<Router>
            <div className="yyn-wrapper">
                <Header />
                <Route path="/" render={() => (<Redirect to="/home" />)} />
                <Route path="/home" component={Home} />
                <Route path="/job" component={About} />
                <Route path="/media" component={Login} />
                <Router path="/register" component={Regisrer} />
                <Footer />
                <Tips />
            </div>
        </Router>)
    }
}
