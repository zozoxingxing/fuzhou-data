import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/Home'
import './assets/css/base.scss'

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
