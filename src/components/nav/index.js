/*
 * @Descripttion: 
 * @version: 
 * @Author: Magic
 * @Date: 2020-09-13 18:07:19
 * @LastEditors: Magic
 * @LastEditTime: 2020-09-13 20:11:59
 */
import React, { Component } from 'react'

import './index.scss'

export default class nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navList: [
                {
                    name: '首页',
                    url: ''
                },
                {
                    name: '平台介绍',
                    url: ''
                },
                {
                    name: '产品体验',
                    url: ''
                },
                {
                    name: '诚信商家',
                    url: ''
                },
                {
                    name: '加入我们',
                    url: ''
                },
                {
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
            return (<li key={index} className={this.state.navIndex === index ? 'active' : ''} onClick={() => this.onChangeNav(index)}>{item.name}</li>)
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
