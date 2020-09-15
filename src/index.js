/*
 * @Descripttion: 
 * @version: 
 * @Author: Magic
 * @Date: 2020-09-13 16:05:36
 * @LastEditors: Magic
 * @LastEditTime: 2020-09-15 07:16:33
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/Home'
import './assets/css/base.scss'
import './assets/iconfont/iconfont.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      header: '刘明的私人blog'
    }
  }


  render() {
    return (
      <div>
        <Home />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
