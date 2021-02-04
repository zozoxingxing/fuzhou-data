import React, { Component } from 'react'
import Tips from '../../components/tips'

import './index.scss'

export default class footer extends Component {
   
    render() {
        return (
            <div className="footer-wrap">
              <Tips />
              <div className="footer-top">
                <div className="top-left">
                  <div className="footer-logo"></div>
                  <div className="footer-tele">
                    <div>咨询热线</div>
                    <div className="tele-num">123-123-1234</div>
                  </div>
                  {/* <div className="footer-account">
                    <div className="word">福州数据资产官方公众号</div>
                    <div className="code"></div>
                  </div> */}
                </div>
                <div className="top-right">
                  <div className="right-title">
                    <div>产品服务</div>
                    <div>解决方案</div>
                    <div>关于我们</div>
                    <div>友情链接</div>
                  </div>
                  <div className="right-content">
                    <div className="content-data">
                      <span>数据治理</span>
                      <span>数据开发</span>
                      <span>数据服务</span>
                    </div>
                    <div className="content-resolve">
                      <span>金融 新零售</span>
                      <span>保险 互联网</span>
                      <span>物流 政务</span>
                    </div>
                    <div className="content-us">
                      <span>公司简介</span>
                      <span>新闻中心</span>
                      <span>最新政策</span>
                    </div>
                    <div className="content-link">
                      <span>天翼云计算分公司</span>
                      <span>天翼企业云盘</span>
                      <span>189邮箱</span>
                      <span>天翼账号</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
                <div className="content">
                  <div className="left-content">
                    <span>@2021 福州数据资产运营公司</span>
                    <span>xxxxxxxxxx</span>
                  </div>
                  <div className="right-content">
                    <span>设为主页</span>|
                    <span>用户协议</span>|
                    <span>隐私政策</span>|
                    <span>法律声明</span>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}
