import React, { Component } from 'react'
import { Icon, Steps } from 'antd'
import './index.scss'
const { Step } = Steps;
export default class Recommend extends Component {
    constructor(props) {
        super(props)
        this.state = {
          current: 1,
        }
    }
    onChange = (current) => {
      console.log(current)
      this.setState({ current })
    }
    render() {
      const { current } = this.state
      const style = {
        zIndex: 999
      }
        return (
          <div className="recommendWrapper" >
            <div className="top">
              <div className="title">热门推荐</div>
              <div className="more">查看更多
                <Icon type="right" style={{fontSize: '14px',color: '#409FE0'}}/>
              </div>
            </div>
            <div className="content">
              <div className="content-left">
                logo
              </div>
              <div className="content-right">
              <div>
                <Steps current={current} onChange={this.onChange} direction="vertical" style={style} >
                    <Step title="Step 1" description="This is a description." />
                    <Step title="Step 2" description="This is a description." />
                    <Step title="Step 3" description="This is a description." />
                  </Steps>
              </div>
              </div>
            </div>
          </div>
        )
    }
}
