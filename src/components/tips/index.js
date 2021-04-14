import React, { Component } from 'react'
import { Icon } from 'antd'
import './index.scss'

export default class tips extends Component {
    constructor(props) {
        super(props)
        this.state = {
          tips: [
            {
              icon: 'up',
              title: '',
              desc: '',
              code: ''
            }
          ],
          showTips: 'wrap-tips'
        }
        this.scrollTop = this.scrollTop.bind(this)
    }
    componentDidMount() {
        window.addEventListener('scroll', this.scrollTop)
    }
    componentWillMount() {
        window.removeEventListener('scroll', this.scrollTop)
    }
    scrollTop(event) {
        const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : 0)
            || window.pageYOffset
            || (event.srcElement ? event.srcElement.body.scrollTop : 0);
        if (scrollTop > 240) {
            this.setState({
                showTips: 'wrap-tips showTips'
            })
        } else {
            this.setState({
                showTips: 'wrap-tips'
            })
        }
    }
    handleClick() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
    render() {
        const tipsItem = this.state.tips.map((item, index) => {
            return (
            <li key={index} onClick={this.handleClick}>
              <Icon type={item.icon}/>
            </li>)
        })
        return (
            <ul className={this.state.showTips}>
              {tipsItem}
            </ul>
        )
    }
}
