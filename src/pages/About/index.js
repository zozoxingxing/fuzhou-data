import React, { Component } from 'react'
import Footer from '../../components/footer'
import { Tabs } from 'antd'
import './index.scss'
const { TabPane } = Tabs;

export default class About extends Component {
    constructor(props) {
        super(props)
        this.workList = {
          name: '公司概况',
          intr: '经常性的进行市场调查，收集相关旅游市场信息，寻找并开发潜在客户，及时、妥善地处理客户意见和投诉等,经常性的进行市场调查，收集相关旅游市场信息，寻找并开发潜在客户，及时、妥善地处理客户意见和投诉等'
        }
        this.state = {
          defaultIndex: 0,
        }
    }
    onShowContext(index) {
      this.setState({
          defaultIndex: index
      })
    }

    render() {
        const contentList = [
          {
            title: '公司概况',
            intr: '10月27日，福州市数据资产运营有限公司在东南大数据产业园研发楼二期1号楼正式揭牌成立。该公司由福州新区开发投资集团有限公司、福州市电子信息集团有限公司、福州市金融控股集团有限公司共同出资成立，经营范围包括数据资源采集、存储、开发、处理、服务和运营，数据资产运营管理，数据资产评估，数据产品开发，软硬件开发和销售，大数据应用平台开发和运营维护，电子政务云服务等。'
          },
          {
            title: '公司架构',
            intr: '10月27日，福州市数据资产运营有限公司在东南大数据产业园研发楼二期1号楼正式揭牌成立。该公司由福州新区开发投资集团有限公司、福州市电子信息集团有限公司、福州市金融控股集团有限公司共同出资成立，经营范围包括数据资源采集、存储、开发、处理、服务和运营，数据资产运营管理，数据资产评估，数据产品开发，软硬件开发和销售，大数据应用平台开发和运营维护，电子政务云服务等。'
          },
          {
            title: '公司董事会',
            intr: '10月27日，福州市数据资产运营有限公司在东南大数据产业园研发楼二期1号楼正式揭牌成立。该公司由福州新区开发投资集团有限公司、福州市电子信息集团有限公司、福州市金融控股集团有限公司共同出资成立，经营范围包括数据资源采集、存储、开发、处理、服务和运营，数据资产运营管理，数据资产评估，数据产品开发，软硬件开发和销售，大数据应用平台开发和运营维护，电子政务云服务等。'
          },
          {
            title: '公司领导',
            intr: '10月27日，福州市数据资产运营有限公司在东南大数据产业园研发楼二期1号楼正式揭牌成立。该公司由福州新区开发投资集团有限公司、福州市电子信息集团有限公司、福州市金融控股集团有限公司共同出资成立，经营范围包括数据资源采集、存储、开发、处理、服务和运营，数据资产运营管理，数据资产评估，数据产品开发，软硬件开发和销售，大数据应用平台开发和运营维护，电子政务云服务等。'
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
              <div className="footer">
                <Footer/>
              </div>
            </div>
        )
    }
}
