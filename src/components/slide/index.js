import React, { Component } from 'react'
import { Carousel, Button } from 'antd'
import './index.scss'

export default class Slide extends Component {
  render() {
    return(
      <div className="slide-wrapper">
        <div className="nav-wrap"></div>
        <div className="slide">
          <Carousel dotPosition="bottom" autoplay>
            <div className="slide-image1">
              <div className="slide-title">
                <span className="sub-title">商业地理大数据服务</span>
                <span className="des">专业商业地产行业大数据服务供应商
                  为商业地产、住宅地产、零售连锁商家提供前策研判、消费者洞察、品牌招商、运营诊断、竞品分析等服务。</span>
                <Button type="primary">了解更多</Button>
              </div>
            </div>
            <div className="slide-image1">
              <div className="slide-title">
                <span className="sub-title">商业地理大数据服务</span>
                <span className="des">专业商业地产行业大数据服务供应商</span>
                <Button type="primary">了解更多</Button>
              </div>
            </div>
            <div className="slide-image1">
              <div className="slide-title">
                <span className="sub-title">商业地理大数据服务</span>
                <span className="des">专业商业地产行业大数据服务供应商</span>
                <Button type="primary">了解更多</Button>
              </div>
            </div>
            <div className="slide-image1">
              <div className="slide-title">
                <span className="sub-title">商业地理大数据服务</span>
                <span className="des">专业商业地产行业大数据服务供应商</span>
                <Button type="primary">了解更多</Button>
              </div>
            </div>
          </Carousel>
        </div>
        <div className="slide-modal-wrap"/>
      </div>
    )
  }
}