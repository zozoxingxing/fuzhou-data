import React, { Component } from 'react'
import { Tabs } from 'antd'
import './index.scss'
const { TabPane } = Tabs;

export default class About extends Component {
  
    render() {
        const contentList = [
          {
            title: '公司概况',
            intr1: '福州市数据资产运营有限公司于2020年9月27日注册。公司由福州新区开发投资集团牵头，福州市电子信息集团、福州市金融控股集团共同出资设立，注册资本5000万元。',
            intr2: '为加速数据开放共享利用进程，贯彻市委、市政府《关于打造国内一流枢纽机场等16个重大项目行动方案》，福州市在第三届数字中国峰会期间组建了福州市数据资产运营有限公司，在全国率先开展数据资产运营的探索实践。',
            image: require('./images/summary.png'),
            imageTitle: '市领导在第三届数字中国建设峰会上为福州市数据资产运营有限公司授牌',
            intr3: '福州市数据资产运营有限公司将通过数据资源汇聚、开发、应用、运营、培育，实现数据资源-资产-资本的产业闭环，促进数据资源价值应用，构建数据产业生态，打造成为国内领先的数据资产运营平台。'
          },
          {
            title: '公司架构',
            image: require('./images/jiagou.png'),
          },
          {
            title: '公司定位',
            intr1: '福州市数据资产运营有限公司以《中共中央、国务院关于构建更加完善的要素市场化配置体系机制的意见》为总指导，致力于打造以“数据汇聚+数据治理+数据开放+数据评估+数据应用+数据交易”为六位一体的全国性、综合性数据资产运营中心，加快数据要素市场化进程，加速形成数字经济新常态、新模式和新优势，全力构建由市场驱动、以数据为核心的时代新基建。'
          }
        ]
        const navItem = contentList.map((item, index) => {
            return (
              <TabPane key={index} tab={item.title}>
                <div className="about-title">{item.title}</div>
                <div className="about-intr">{item?.intr1}</div>
                <div className="about-intr">{item?.intr2}</div>
                <div className="summary">
                  <img src={item?.image} className="summary-image" />
                  <p className="summary-title">{item?.imageTitle}</p>
                </div>
                <div className="about-intr">{item?.intr3}</div>
              </TabPane>
              )
        })
        return (
            <div className="about-wrapper">
              <div className="nav"></div>
              <div className="about-banner"></div>
              <div className="about-content">
                <Tabs tabPosition="left">
                  {navItem}
                </Tabs>
              </div>
            </div>
        )
    }
}
