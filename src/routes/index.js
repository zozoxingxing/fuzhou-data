import React from 'react'
import {BrowserRouter, Route, Redirect} from "react-router-dom";
import {Provider} from 'react-redux';
import store from '../store';
import App from '../App';

import Home from '../pages/Home'
import About from '../pages/About'
import Login from '../pages/Login'
import Regisrer from '../pages/Register'
import NewsItem from '../pages/News'

const Index = props => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <App>
                    <Route path="/" exact render={() => (<Redirect to="/home"/>)}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/media" component={Login}/>
                    <Route path="/register" component={Regisrer}/>
                    <Route path="/news" component={NewsItem}/>
                </App>
            </BrowserRouter>
        </Provider>
    )
}

export default Index;
