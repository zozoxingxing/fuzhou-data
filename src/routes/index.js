/*
 * @Descripttion: 
 * @version: 
 * @Author: Magic
 * @Date: 2020-09-15 21:49:01
 * @LastEditors: Magic
 * @LastEditTime: 2020-09-15 21:54:06
 */
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Home from '../pages/Home'
import Job from '../pages/Job'
import Media from '../pages/Media'

export default class route extends Component {
    render() {
        return (<Router>
            <Route path="/" render={() => (<Redirect to="/home" />)} />
            <Route path="/home" component={Home} />
            <Route path="/job" component={Job} />
            <Route path="/media" component={Media} />
        </Router>)
    }
}
