import React, { Component } from 'react'
import { Icon } from 'antd'
import './index.scss'

export default class tips extends Component {
    constructor(props) {
        super(props)
        this.state = {
          tips: [
            {
              icon: 'edit',
              title: '微信公众号',
              desc: '',
            },
            {
              icon: 'phone',
              title: '邮箱',
              desc: 'ybsjyyn@yntengyun.com',
              code: ''
            },
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
    handleClick(index) {
        if (index === 3) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        }
    }
    render() {
        const tipsItem = this.state.tips.map((item, index) => {
            return (<li key={index} onClick={() => this.handleClick(index)}>
                {/* <i className={`iconfont ${item.icon}`}></i> */}
                <Icon type={item.icon}/>
                <div className={`yyn-more ${item.title && index < 3 ? (index === 2 ? 'email' : '') : 'hideDom'}`} >
                    <div className="angle"></div>
                    <div className="content">
                        <p>{item.title}</p>
                        <img src={item.code} alt="二维码" className={item.code ? '' : 'hideDom'} />
                        <p className={`mt20 ${index === 1 || index === 2 ? '' : 'hideDom'}`}>{item.desc}</p>
                    </div>
                </div>

            </li>)
        })
        return (
            <ul className={this.state.showTips}>
                {tipsItem}
            </ul>
        )
    }
}
