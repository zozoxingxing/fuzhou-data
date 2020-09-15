/*
 * @Descripttion: 
 * @version: 
 * @Author: Magic
 * @Date: 2020-09-13 18:07:19
 * @LastEditors: Magic
 * @LastEditTime: 2020-09-15 08:02:04
 */
import React, { Component } from 'react'

import './index.scss'

export default class nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navList: [
                {
                    id: '#home',
                    name: '首页',
                    url: ''
                },
                {
                    id: '#about',
                    name: '平台介绍',
                    url: ''
                },
                {
                    id: '#experience',
                    name: '产品体验',
                    url: ''
                },
                {
                    id: '#merchant',
                    name: '诚信商家',
                    url: ''
                },
                {
                    id: '',
                    name: '加入我们',
                    url: ''
                },
                {
                    id: '',
                    name: '媒体报道',
                    url: ''
                }
            ],
            navIndex: 0
        }
    }

    onChangeNav(index) {
        this.setState({
            navIndex: index
        })
    }

    render() {
        const listItem = this.state.navList.map((item, index) => {
            return (<li key={index} className={this.state.navIndex === index ? 'active' : ''} onClick={() => this.onChangeNav(index)}>
                <a href={item.id ? item.id : item.url}>{item.name}</a>
            </li>)
        })
        return (
            <div className="nav">
                <ul>
                    {listItem}
                </ul>
            </div>
        )
    }
}
