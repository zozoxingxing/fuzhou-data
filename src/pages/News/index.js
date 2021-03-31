import React, { Component } from 'react'
import {connect} from 'react-redux';
import './index.scss'


class NewsItem extends Component {
    render() {
      const { title, id } = this.props.match.params;
      const newsContent = this.props.newsData.toJS();
      const background = {
        background: `url(${newsContent[id].image}) no-repeat center`,
        backgroundSize: 'cover'
      }
      return (
        <div className="news-pager">
          <div className="news-nav"/>
          <div className="news-content">
            <div className="content-detail">
              <div className="news-left">
                <div className="news-title">
                  { title }
                </div>
                <div className="news-date">
                  2021-01-15  科技日报
                </div>
                <div className="image-wrap">
                  <div className="news-image" style={background}/>
                </div>
                {
                  <div className="news-cont">
                    <p>{newsContent[id].first}</p>
                    <p>{newsContent[id].second}</p>
                    <p>{newsContent[id].third}</p>
                  </div>
                }
              </div>
              <div className="news-right">
                <div className="special">精彩专题</div>
                <div className="special-image"/>
                <div className="special-title">
                  国有企业数字化转型宣贯会
                </div>
                <p>
                  这项研究成果表明，我国科研人员通过构建天地一体化广域量子保密通信网络的雏形，为未来实现覆盖全球的量子保密通信网络奠定了科学与技术基础。
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }
}
const mapState = (state) => ({
  newsData: state.getIn(['news', 'newsData']),
})

export default connect(mapState)(NewsItem);