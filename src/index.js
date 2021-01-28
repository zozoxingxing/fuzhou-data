
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Router from './routes'
import './assets/css/base.scss'
import './assets/iconfont/iconfont.css'

class App extends Component {
  // constructor(props) {
  //   super(props)
  // }


  render() {
    return (
      <Router />
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
