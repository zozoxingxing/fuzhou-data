import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import './index.scss'

export default class nav extends Component {
    constructor(props) {
      super(props)
      this.state = {
        navIndex: 0
      }
    }
    onChangeNav(item, index) {
        this.setState({
            navIndex: index
        })
    }

    render() {
        const navList = [
          {
            name: '首页',
            url: '/home',
            position: 'left'
          },{
            name: '关于我们',
            url: '/job',
            position: 'left'
          },{
            name: '登录',
            url: '/home',
            position: 'right'
          },{
            name: '注册',
            url: '/home',
            position: 'right'
          }
        ]
        const listItem = navList.map((item, index) => {
            return (
              <div
                key={index} 
                className={`${this.state.navIndex === index  ? 'active' : ''} ${item.position} item`} 
                onClick={() => this.onChangeNav(item, index)}>
                  <Link to={item.url}>{ item.name }</Link>
              </div>
            )
        })
        return (
            <div className="nav">
              {listItem}
            </div>
        )
    }
}
