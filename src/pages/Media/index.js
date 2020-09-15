import React, { Component } from 'react'

import Header from '../../components/header'
import Footer from '../../components/footer'
import Tips from '../../components/tips'

export default class media extends Component {
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
