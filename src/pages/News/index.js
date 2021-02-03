import React, { Component } from 'react'
import Footer from '../../components/footer'
import './index.scss'
export default class NewsItem extends Component {
    render() {
      return (
        <div className="news-pager">
          <div className="news-nav"></div>
          <div className="news-content">
            <div className="content-detail">
              <div className="news-left">
                <div className="news-title">
                  本市我国成功构建世界首个天地一体化量子通信网络
                </div>
                <div className="news-date">
                  2021-01-15  科技日报
                </div>
                <div className="image-wrap">
                  <div className="news-image"></div>
                </div>
                <div className="news-cont">
                  <p>
                  近日，中国科学技术大学潘建伟团队与中科院上海技术物理研究所等单位合作，构建了世界上首个天地一体化量子通信网络，并进行了长达两年多的稳定性和安全性测试、标准化研究以及政务金融电力等不同领域的应用示范。
                  </p>
                  <p>
                  量子密钥分发主要有光纤和自由空间两种实现方式。科研人员在量子保密通信“京沪干线”与“墨子号”量子卫星成功对接的基础上，构建了世界上首个集成700多条地面光纤量子密钥分发（QKD）链路和两个卫星对地自由空间高速QKD链路的广域量子通信网络。
                  </p>
                  <p>
                  这项研究成果表明，我国科研人员通过构建天地一体化广域量子保密通信网络的雏形。
                  </p>
                </div>
              </div>
              <div className="news-right">
                <div className="special">精彩专题</div>
                <div className="special-image"></div>
                <div className="special-title">
                  国有企业数字化转型宣贯会
                </div>
                <p>
                  这项研究成果表明，我国科研人员通过构建天地一体化广域量子保密通信网络的雏形，为未来实现覆盖全球的量子保密通信网络奠定了科学与技术基础。
                </p>
              </div>
            </div>
          </div>
          <div className="news-footer">
            <Footer />
          </div>
        </div>
      )
    }
}