
import React, { Component } from 'react'
import { Icon } from 'antd'

import './index.scss'

export default class Plan extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
          <div className="planWapper">
            <div className="top">
              <div className="title">解决方案</div>
              <div className="more">
                查看更多<Icon type="right"/>
              </div>
            </div>
            <div className="content"></div>
          </div>
        )
    }
}
