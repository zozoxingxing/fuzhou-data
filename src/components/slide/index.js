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
                <span>商业地理大数据服务</span>
                <span className="des">专业商业地产行业大数据服务供应商</span>
                <Button type="primary">了解更多</Button>
              </div>
            </div>
            <div className="slide-image1">
              <div className="slide-title">
                <span>商业地理大数据服务</span>
                <span className="des">专业商业地产行业大数据服务供应商</span>
                <Button type="primary">了解更多</Button>
              </div>
            </div>
            <div className="slide-image1">
              <div className="slide-title">
                <span>商业地理大数据服务</span>
                <span className="des">专业商业地产行业大数据服务供应商</span>
                <Button type="primary">了解更多</Button>
              </div>
            </div>
            <div className="slide-image1">
              <div className="slide-title">
                <span>商业地理大数据服务</span>
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