/*
 * @Descripttion: 
 * @version: 
 * @Author: Magic
 * @Date: 2020-09-15 21:26:54
 * @LastEditors: Magic
 * @LastEditTime: 2020-09-15 22:12:43
 */
import React, { Component } from 'react'

import Header from '../../components/header'
import Footer from '../../components/footer'
import Tips from '../../components/tips'

export default class job extends Component {
    render() {
        return (
            <div className="yyn-wrapper">
                <div className="yyn-headerWrapper">
                    <Header />
                </div>
                <Footer />
                <Tips />
            </div>
        )
    }
}
