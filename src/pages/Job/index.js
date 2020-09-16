/*
 * @Descripttion: 
 * @version: 
 * @Author: Magic
 * @Date: 2020-09-15 21:26:54
 * @LastEditors: Magic
 * @LastEditTime: 2020-09-16 08:05:05
 */
import React, { Component } from 'react'

import './index.scss'

export default class job extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '腾云直上，方见浩瀚',
            desc: `现面向全国，遍洒英雄帖，招募各界人才和有识之士<br/>
                    共建云南智慧旅游和智慧城市新生态。`
        }
    }

    render() {
        return (
            <div className="yyn-wrapper">
                <div className="yyn-banner yyn-jobbg">
                    <div className="yyn-bannerContent">
                        <h2>{this.state.title}</h2>
                        <p dangerouslySetInnerHTML={{ __html: this.state.desc }}></p>
                    </div>
                </div>
            </div>
        )
    }
}
