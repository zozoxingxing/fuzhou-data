/*
 * @Descripttion: 
 * @version: 
 * @Author: Magic
 * @Date: 2020-09-13 18:07:19
 * @LastEditors: Magic
 * @LastEditTime: 2020-09-16 07:39:11
 */
import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import './index.scss'

export default class nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navList: [
                {
                    id: '#home',
                    name: '首页',
                    url: '/home'
                },
                {
                    id: '#about',
                    name: '平台介绍',
                    url: '/home'
                },
                {
                    id: '#experience',
                    name: '产品体验',
                    url: '/home'
                },
                {
                    id: '#merchant',
                    name: '诚信商家',
                    url: '/home'
                },
                {
                    id: '',
                    name: '加入我们',
                    url: '/job'
                },
                {
                    id: '',
                    name: '媒体报道',
                    url: '/media'
                }
            ],
            navIndex: 0
        }
    }

    onChangeNav(id, index) {
        this.setState({
            navIndex: index
        })
        console.log(this.props, 999)
        if (id) {
            let offsetTop = id === '#home' ? 0 : document.querySelector(id).offsetTop;
            window.scrollTo({
                top: index > 3 ? 0 : offsetTop,
                behavior: 'smooth'
            })
        }
    }

    render() {
        const listItem = this.state.navList.map((item, index) => {
            return (<li key={index} className={this.state.navIndex === index ? 'active' : ''} onClick={() => this.onChangeNav(item.id, index)}>
                <Link to={item.url}>{item.name}</Link>
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
