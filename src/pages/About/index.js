import React, { Component } from 'react'
import { Tabs } from 'antd'
import './index.scss'
const { TabPane } = Tabs;

export default class About extends Component {
    
    render() {
      const aboutInfo = '中国电信股份有限公司云计算分公司（以下简称天翼云）是中国电信旗下直属专业公司，集市场营销、运营服务、产品研发于一体，坐落在北京最接近云的香山脚下，胸怀亚太，放眼世界，致力于成为亚太领先的云计算基础服务提供商。2016年，天翼云率先推出了“2+31+x”资源池战略布局，依托自主研发的云平台和5s安全体系，以及运营商央企底蕴与互联网创新机制，为用户提供安全云服务。天翼云为用户提供云主机、云存储、云备份、桌面云、专享云、混合云、CDN、大数据等全线产品，同时为政府、医疗、教育、金融等行业打造定制化云解决方案，是政府企业客户的首选云服务商。天翼云还为“互联网+”在各行业落地以及“大众创业、万众创新”提供坚实可靠的承载。';
        const contentList = [
          {
            title: '公司概况',
            intr: aboutInfo
          },
          {
            title: '公司架构',
            intr: aboutInfo
          },
          {
            title: '公司董事会',
            intr: aboutInfo
          },
          {
            title: '公司领导',
            intr: aboutInfo
          }
        ]
        const navItem = contentList.map((item, index) => {
            return (
              <TabPane key={index} tab={item.title}>
                <div className="about-title">{item.title}</div>
                <div className="about-intr">{item.intr}</div>
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
