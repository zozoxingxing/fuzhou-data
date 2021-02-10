
import React, { Component } from 'react'
import  Swiper from 'swiper/js/swiper.js';
import "swiper/css/swiper.min.css"
import { Icon } from 'antd'

import './index.scss'

export default class Plan extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
        new Swiper('.swiper-plan', {
            direction : 'horizontal',
            slideToClickedSlide: true,
            grabCursor: true,
            speed: 1000,
            spaceBetween: 40,
            initialSlide: 0,
            preventClicks: false,
            slidesPerView: 5, //显示三个，宽度平分
            centeredSlides: true, // active slide 居中设置（默认居左）
            loop: true, // 循环
            parallax: true,
            on: {
                setTranslate: function () {
                    const slides = this.slides
                    for (let i = 0; i < slides.length; i++) {
                        let slide = slides.eq(i)
                        let progress = slides[i].progress
                        //slide.html(progress.toFixed(2)); 看清楚progress是怎么变化的
                        slide.css({'opacity': '', 'background': ''});
                        slide.transform('');//清除样式
                        slide.transform('scale('+(1 - Math.abs(progress)/8)+')');
                    }
                },
                setTransition: function (transition) {
                    for (let i = 0; i < this.slides.length; i++) {
                        let slide = this.slides.eq(i)
                        slide.transition(transition);
                    }
                },
            },
        })
    }
    render() {
      const dataList = [
        {
          img: 'https://honganstatic.cls.cn/assets/web/traffic.png',
          // img: '../../assets/images/traffic.png',
          title: '交通地理',
          content: '基于交通与地理大数据制定智能决策，帮助城市实现智慧管控、文明交通。'
        }, {
          img: 'https://honganstatic.cls.cn/assets/web/tax.png',
          // img: '../../assets/images/tax.png',
          title: '涉税服务',
          content: '帮助企业实现智能申报，节约人力、提高效率，促进企业数字化转型。'
        },{
          img: 'https://honganstatic.cls.cn/assets/web/insurance.png',
          // img: '../../assets/images/insurance.png',
          title: '医保云贷',
          content: '以医保结算业务情况为基础，面向信誉良好、经营稳定的小微企业发放信用贷款。'
        },{
          img: 'https://honganstatic.cls.cn/assets/web/money.png',
          // img: '../../assets/images/money.png',
          title: '榕闪贷',
          content: '基于福州市公共信用数据分析的信用贷款，促进消费，助力经济恢复。'
        },
        {
          img: 'https://honganstatic.cls.cn/assets/web/trade.png',
          // img: '../../assets/images/trade.png',
          title: '智慧文旅',
          content: '基于大数据监测、统计城市旅游动态指标，助力城市规避风险、智慧管控。'
        },
        
      ]
      const itemList = dataList.map((item, index) => {
        return (
          <div className="swiper-slide" key={index}>
            <img src={item.img} alt=""  className="plan-image"/>
            <div className="paperwork">
              <div className="paper-title"><span>{item.title}</span></div>
              <div className="paper-content">{item.content}</div>
            </div>
          </div>
        )
      })
        return (
          <div className="plan-wrapper">
            <div className="top">
              <div className="title">解决方案</div>
              <div className="more">
                查看更多<Icon type="right"/>
              </div>
            </div>
            <div className="content">
              <div className="content-wrap">
                <div className="swiper-plan">
                  <div className="swiper-wrapper">
                    {itemList}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
