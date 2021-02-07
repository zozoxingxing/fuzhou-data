import React, { Component } from 'react'

import Nav from '../nav'
import './index.scss'

export default class header extends Component {
    constructor(props) {
        super(props)
        this.state = {
          moved: 0,
          prevScroll: 0
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
      const currentY = window.scrollY
      const prevScroll = this.state.prevScroll
      if(currentY > 106 && currentY - prevScroll > 0) {
        this.setState({
          moved: -106
        })
      }else {
        this.setState({
          moved: 0
        })
      }
      this.setState({
        prevScroll: currentY
      })
    }
    render() {
      const transform = `translate(0px, ${this.state.moved}px)`
        return (
          <div className="header-wrap" style={{transform: transform }}>
            <div className='header-box'>
                <div className="header">
                    <div className="logo" />
                    <Nav/>
                </div>
            </div>
          </div>
        )
    }
}


