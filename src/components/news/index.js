
import React, { Component } from 'react'
import Footer from '../../components/footer'
import './index.scss'

export default class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jobs: [
                {
                    name: '公共事务',
                    url: ''
                },
                {
                    name: '平台运营',
                    url: ''
                },
                {
                    name: '产品技术',
                    url: ''
                },
                {
                    name: '商务拓展',
                    url: ''
                },
                {
                    name: '市场品牌策划',
                    url: ''
                },
                {
                    name: '电商运营',
                    url: ''
                },
                {
                    name: '设计师',
                    url: ''
                }
            ]
        }
    }
    goDetail(url) {

    }
    render() {
        // const listItem = this.state.jobs.map((item, index) => {
        //     return (<li key={index} onClick={() => this.goDetail(item.url)}>{item.name}</li>)
        // })
        return (
          <div className="news-warpper">
            <div className="news">
              <div className="news-top">
                <div className="main-title">新闻动态</div>
                <div className="main-content">新闻内容</div>
              </div>
              <Footer />
            </div>
          </div>
        )
    }
}
