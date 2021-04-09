import React, { Component } from 'react'
import { Icon } from 'antd'
import './index.scss'

export default class Unit extends Component {
    
    render() {
        const dataList = [
          {
            icon: 'https://honganstatic.cls.cn/assets/web/icon1.png',
            title: '汇聚价值',
            content: '汇聚多源头数据，提炼数据隐藏价值',
          },
          {
            icon: 'https://honganstatic.cls.cn/assets/web/icon2.png',
            title: '多维展现',
            content: '多样化的图表展现形式，酷炫科技感的视觉冲击',
          },
          {
            icon: 'https://honganstatic.cls.cn/assets/web/icon3.png',
            title: '有效监控',
            content: '24小时监测可靠数据源，智能预警、规避风险',
          },
          {
            icon: 'https://honganstatic.cls.cn/assets/web/icon4.png',
            title: '智慧决策',
            content: '基于历史数据轨迹进行分析和预判，助力智慧决策',
          }
        ]
        const item = dataList.map((item, index) => {
          return (
            <div className="data" key={index}>
              <div className="data-left">
                <img src={item.icon} alt="" />
              </div>
              <div className="data-right">
                <div className="data-title">{item.title}</div>
                <div className="data-content">{item.content}</div>
              </div>
            </div>
          )
        })
        return (
          <div className="unit-wrap" >
            <div className="top">
              <div className="title">炫酷大屏</div>
            </div>
            <div className="content">
              <div className="content-left">
                <div className="item-wrap">
                 {item}
                </div>
              </div>
              <div className="content-right">
                <div className="image-one"></div>
                <div className="image-two"></div>
              </div>
            </div>
          </div>
        )
    }
}
