import React, { Component } from 'react'
import  Swiper from 'swiper/js/swiper.js';
import "swiper/css/swiper.min.css"
import './index.scss'

export default class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
          activeIndex : 0
        }
    }
    componentDidMount() {
    const self = this;
     new Swiper ('.swiper-container',{
      slideToClickedSlide: true,
      grabCursor : true,
      speed: 1000,
      initialSlide: 0,
      preventClicks: false,
      spaceBetween: 100,
      slidesPerView: 3, //显示三个，宽度平分
      centeredSlides: true, // active slide 居中设置（默认居左）
      loop: true, // 循环
      navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
        },
        on: {
          slideChange: function () {
            self.setState({
              activeIndex: this.realIndex
            })
          },
        }
      })
    }
    render() {
      const activeContent = [
        [{
            title: '快速建模',
            content: '平台提供数据建模的一体化流程，内嵌数据集成、数据预处理、统计分析、特征提取、建模等集成算子，屏蔽底层技术信息，用户只需拖拽相应模块即可完成建模。',
          },{
            title: '线上预测',
            content: '用户无需下载模型，可以直接基于线上的模型进行目标样本的预测，预测结果支持在线预览和下载到本地，便捷高效。'
          },{
            title: '协同计算',
            content: '针对涉及隐私的数据，平台提供多方协同计算服务，帮助客户在自身数据不出本地的条件下与其他多方进行隐匿的协同计算，强强联手，实现共赢。'
          },{
            title: '联邦学习',
            content: '平台拥有纯双方、无损、高性能、0泄露的联邦学习算法库，帮助客户进行联邦建模，无需向任何方披露自身原始数据，帮助实现数据价值的最大化。'
          }],
          [{
            title: '数据市场',
            content: '数据市场为平台用户提供各类数据资产的发布与购买，主要包括数据包资产、API接口以及加工提炼后的增值数据。',
          },{
            title: '数据确权',
            content: '数据提供方通过提交相关的有效文件材料证明所提供数据的权属与合规性，确保平台数据交易的安全，最大程度地保障数据提供方与购买方的权益。'
          },{
            title: '资产定价',
            content: '平台为用户发布资产提供定价服务，主要包括资源型定价法、调用型定价法、多方议价法以及贡献度型定价法。'
          },{
            title: '资产发行',
            content: '平台上任何类型的数据资产在发布之前都会经过严格的审核程序，包括初审、专家评审、复审等环节，力保平台发行数据的安全性、合法性与高品质。'
          }],
          [{
            title: '解决方案',
            content: '平台提供数据建模的一体化流程，内嵌数据集成、数据预处理、统计分析、特征提取、建模等集成算子，屏蔽底层技术信息，用户只需拖拽相应模块即可完成建模。',
          },{
            title: '应用市场',
            content: '用户无需下载模型，可以直接基于线上的模型进行目标样本的预测，预测结果支持在线预览和下载到本地，便捷高效。'
          },{
            title: '场景专题',
            content: '针对涉及隐私的数据，平台提供多方协同计算服务，帮助客户在自身数据不出本地的条件下与其他多方进行隐匿的协同计算，强强联手，实现共赢。'
          },{
            title: '客户服务',
            content: '平台拥有纯双方、无损、高性能、0泄露的联邦学习算法库，帮助客户进行联邦建模，无需向任何方披露自身原始数据，帮助实现数据价值的最大化。'
          }],
      ]
      return (
        <div className="featuresWrapper">
          <div className="top">
            <div className="title">产品服务</div>
          </div>
          <div className="content">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {
                        [
                            {name: '数据开发', value: require('./images/data11.png')},
                            {name: '数据治理', value: require('./images/data22.png')},
                            {name: '数据服务', value: require('./images/data33.png')},
                        ].map((item, index) => (
                            <div className="swiper-slide" key={index}>
                                <div className="ava">
                                    <img src={item.value} alt=""/>
                                    <div className="title">{item.name}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
              <div className="swiper-button-prev" />
              <div className="swiper-button-next" />
            </div>
            <div className="word-container">
              {
                activeContent[this.state.activeIndex].map((item, index) => {
                  return (
                    <div className="active-wrap" key={index}>
                      <div className="item">
                        <div className="active-title">{item.title}</div>
                        <div className="active-content">{item.content}</div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      )
    }
}
