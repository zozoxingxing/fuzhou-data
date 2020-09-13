/*
 * @Descripttion: 
 * @version: 
 * @Author: Magic
 * @Date: 2020-09-13 16:43:52
 * @LastEditors: Magic
 * @LastEditTime: 2020-09-13 21:28:18
 */
import React, { Component } from 'react'

import Nav from '../nav'
import './index.scss'

export default class header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '一部手机游云南',
            platform: '云南全域智慧旅游平台',
            header: 'yyn-header'
        }
        this.onScroll = this.onScroll.bind(this)
    }
    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)
    }
    componentWillMount() {
        window.removeEventListener('scroll', this.onScroll)
    }

    onScroll(event) {
        const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false)
            || window.pageYOffset
            || (event.srcElement ? event.srcElement.body.scrollTop : 0);
        if (scrollTop) {
            this.setState({
                header: 'yyn-header white'
            })
        } else {
            this.setState({
                header: 'yyn-header'
            })
        }
    }
    render() {
        return (
            <div className={this.state.header}>
                <div className="header">
                    <dl>
                        <dt><img src={require('../../assets/images/yyn-logo.png')} alt="logo" /></dt>
                        <dd>
                            <h3>{this.state.title}</h3>
                            <p>{this.state.platform}</p>
                        </dd>
                    </dl>
                    <Nav />
                </div>
            </div>
        )
    }
}


