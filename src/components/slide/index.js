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
                <span className="des">专业商业地产行业大数据服务供应商</span>
                <span className="des-detail">为商业地产、住宅地产、零售连锁商家提供前策研判、消费者洞察、品牌招商、运营诊断等服务。大数据智能汇聚分析，锁定目标客群、精准营销，沉淀行业数据，助力智能区域规划。</span>
                <Button type="primary">了解更多</Button>
              </div>
            </div>
            <div className="slide-image1">
              <div className="slide-title">
                <span className="sub-title">商业地理大数据服务</span>
                <span className="des">专业商业地产行业大数据服务供应商</span>
                <span className="des-detail">为商业地产、住宅地产、零售连锁商家提供前策研判、消费者洞察、品牌招商、运营诊断等服务。大数据智能汇聚分析，锁定目标客群、精准营销，沉淀行业数据，助力智能区域规划。</span>
                <Button type="primary">了解更多</Button>
              </div>
            </div>
            <div className="slide-image1">
              <div className="slide-title">
                <span className="sub-title">商业地理大数据服务</span>
                <span className="des">专业商业地产行业大数据服务供应商</span>
                <span className="des-detail">为商业地产、住宅地产、零售连锁商家提供前策研判、消费者洞察、品牌招商、运营诊断等服务。大数据智能汇聚分析，锁定目标客群、精准营销，沉淀行业数据，助力智能区域规划。</span>
                <Button type="primary">了解更多</Button>
              </div>
            </div>
            <div className="slide-image1">
              <div className="slide-title">
                <span className="sub-title">商业地理大数据服务</span>
                <span className="des">专业商业地产行业大数据服务供应商</span>
                <span className="des-detail">为商业地产、住宅地产、零售连锁商家提供前策研判、消费者洞察、品牌招商、运营诊断等服务。大数据智能汇聚分析，锁定目标客群、精准营销，沉淀行业数据，助力智能区域规划。</span>
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