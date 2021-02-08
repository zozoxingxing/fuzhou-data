import React, { Component } from 'react'
import { Icon, Steps } from 'antd'
import './index.scss'
import * as echarts from 'echarts/lib/echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/chart/graph'
const { Step } = Steps;
const ocr = require('../../assets/images/OCR.png')
const number = require('../../assets/images/number.png')
const card = require('../../assets/images/card.png')
const three = require('../../assets/images/three.png')
const person = require('../../assets/images/person.png')
const env = require('../../assets/images/env.png')

export default class Recommend extends Component {
    constructor(props) {
        super(props)
        this.state = {
          current: 0,
          chart: null
        }
    }
    componentDidMount() {
      const chart = echarts.init(document.getElementById('logo'))
      this.setState({chart})
    }
    onChange = (current) => {
      this.setState({ current })
    }
    praseSource = (val) => {
      for (var i = 0; i < val.length; i++) {
        if (val[i].category === 6) {
          val[i] = {
            name: val[i].name,
            color: '#215D94 ',
            symbolSize: 6+4*i,
            draggable: true, 
          }
        }else {
          val[i] = {
            name: val[i].name,
            symbolSize: 65, // 控制每个圆的大小
            draggable: true, // 控制是否可拖动
            category: val[i].category, // 对应工具显示隐藏
            itemStyle: {
              borderColor: '#fff',
              borderWidth: 4,
              shadowBlur: 10,
              shadowColor: 'rgba(98, 198, 248, 0.5)', //圆边框阴影的颜色
            }
          }
        }
      }
      return val
    }
    praseLink = (val) => {
      for (var i = 0; i < val.length; i++) {
        if(i > 4) {
          val[i]['lineStyle'] = {
            type: 'dotted',
          }
        }else {
          val[i]['lineStyle'] = {
            type: 'solid',
          }
        }
      }
      return val
    }
    render() {
      // 有图片和没图片的关系项的类型非标为0、1
      const sourceData = [
        {
          name: '身份证实名验证',
          category: 2
        },{
          name: '证件OCR',
          category: 0
        },{
          name: '人像比对',
          category: 1
        },{
          name: '空气质量查询',
          category: 3
        },{
          name: '企业三要素核验',
          category: 4
        },{
          name: '纳税人识别号',
          category: 5
        },{
          name: 'empty1',
          category: 6
        },{
          name: 'empty2',
          category: 6
        },{
          name: 'empty3',
          category: 6
        },{
          name: 'empty4',
          category: 6
        }
      ]
      // 连接关系
      const linkData = [
        {
          source: '纳税人识别号',
          target: '证件OCR'
        },{
          source: '证件OCR',
          target: '身份证实名验证'
        },{
          source: '身份证实名验证',
          target: '企业三要素核验'
        },{
          source: '身份证实名验证',
          target: '空气质量查询'
        },{
          source: '身份证实名验证',
          target: '人像比对'
        },{
          source: '身份证实名验证',
          target: 'empty4'
        },{
          source: '企业三要素核验',
          target: 'empty2'
        },
        {
          source: '人像比对',
          target: 'empty3'
        },{
          source: '证件OCR',
          target: 'empty1'
        },
      ]
      var typeData = [
        {
        name: '证件OCR',
        symbolKeepAspect: true,
        symbol: `image://${ocr}`,        
        },{
          name: '人像比对',
          symbolKeepAspect: true,
          symbol: `image://${person}`,        
        },{
          name: '身份证实名验证',
          symbolKeepAspect: true,
          symbol: `image://${card}`,        
        },{
          name: '空气质量查询',
          symbolKeepAspect: true,
          symbol: `image://${env}`,        
        },{
          name: '企业三要素核验',
          symbolKeepAspect: true,
          symbol: `image://${three}`,        
        },{
          name: '纳税人识别号',
          symbolKeepAspect: true,
          symbol: `image://${number}`,        
        },{
          name: '',
          symbol: 'circle'
        }
      ]
      const option = {
        series: [{
          type: 'graph',
          layout: 'force',
          force: {
            repulsion: 500,
            edgeLength: 100
          },
          label: {
            normal: {
                show: true,
                color: 'rgba(0,0,0,0)'
            }
          },
          zoom: 0.9,
          emphasis: {
            focus:'self',
            scale: true,
            itemStyle: {
              shadowColor: '#162d5e',
              shadowBlur: 20
            }
          },
          top: '10%',
          data: this.praseSource(sourceData),
          links: this.praseLink(linkData),
          lineStyle: {
            color: '#3385C1',
            width: 2,
            curveness: 0.2
          },
          categories: typeData 
        }]
      }
      if(this.state.chart){
        this.state.chart.off('click')
        this.state.chart.setOption(option)
        this.state.chart.on('click', (params) => {
          const category = params.data.category
          if(category < 6) {
            this.setState({
              current: category
            })
          }
        })
      }
      const { current } = this.state
      const recommentContent = [
        {
          title: '证件OCR',
          description: '基于光学字符识别技术，结合领先的深度学习算法，将证件上的文字内容，直接转换为可编辑的文本，可精准快速识别身份证、银行卡、驾驶证、行驶证等卡证类信息。'
        },
        {
          title: '人像对比',
          description: '基于用户授权，实时快速核实身份信息及人像照片是否真实有效，不限性别，并可与活体检测、身份证OCR技术灵活融合。'
        },
        {
          title: '身份实名验证',
          description: '根据用户的姓名和身份证信息到权威数据库中进行核验，快速验证姓名与身份证号真实性，一致性，实时核查，结果准确，权威。'
        },
        {
          title: '空气质量查询',
          description: '提供城市实时和未来几天的空气质量情况。包括：空气质量，空气质量指数以及污染物（pm2.5，no2，so2）指数等数据。'
        },
        {
          title: '企业三要素核验',
          description: '此数据API可核验企业名称、社会统一信用代码、法人一致性。'
        },
        {
          title: '纳税人识别号',
          description: '可通过企业名称查询社会统一信用代码（纳税人识别号）、企业类型、企业状态、地址、联系电话、开户行、开户行帐号。可以辅助企业快速核对开具发票信息。'
        },{
          title: '',
          description: ''
        }
      ]
        return (
          <div className="recommendWrapper" >
            <div className="top">
              <div className="title">热门推荐</div>
              <div className="more">
                查看更多<Icon type="right"/>
              </div>
            </div>
            <div className="content-wrap">
              <div className="content">
                <div className="content-left">
                  <div id="logo" style={{width: '100%',height: '100%'}}/>
                </div>
                <div className="content-right">
                  <Steps
                    direction="vertical"
                    current={current}
                    onChange={this.onChange}
                    >
                    {
                      recommentContent.map((item, index) => {
                        return(
                          <Step
                            key={index}
                            title={item.title}
                            description={item.description}
                          />
                        )
                      })
                    }
                  </Steps>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
