import React from 'react';
import ReactDOM from 'react-dom';

import Router from './routes'
import './assets/css/base.scss'
import './assets/iconfont/iconfont.css'
import 'antd/dist/antd.css'

ReactDOM.render(
    <Router/>,
    document.querySelector('#root')
)
