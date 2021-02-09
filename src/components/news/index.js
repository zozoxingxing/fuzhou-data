
import React, { Component } from 'react'
import Footer from '../../components/footer'
import {connect} from 'react-redux';
import {actionCreators} from '../../components/header/store';
import './index.scss'
import {NavLink} from 'react-router-dom';

class News extends Component {
  
    render() {
      const { handleHeaderShowOrHide } = this.props
      const newsList = [
        {
          url: 'https://honganstatic.cls.cn/assets/web/news1.png',
          time: '2021-1-22',
          title: '15个全球最有影响力的大数据公司',
          content: '大数据公司已具有影响世界的能力，大数据在这个时代的威力正在展现。'
        },{
          url: 'https://honganstatic.cls.cn/assets/web/news2.png',
          time: '2021-1-22',
          title: '中国电子科技创新大会在京召',
          content: '科技引领未来 创新驱动发展'

        },{
          url: 'https://honganstatic.cls.cn/assets/web/news3.png',
          time: '2021-1-22',
          title: 'PP助手开启移动应用分发新战略——“数据+”',
          content: '该战略核心是大数据生态系统，涵盖了具有深度挖掘和收集大数据能力的优质移动场。'
        },
        {
          url: 'https://honganstatic.cls.cn/assets/web/news4.png',
          time: '2021-1-22',
          title: '第十届天翼智能生态产业高峰论坛',
          content: '昨天，第十届天翼智能生态产业高峰论坛在广州举行。在5G和AI技术不断创新与突破的智能时代'

        },{
          url: 'https://honganstatic.cls.cn/assets/web/news5.png',
          time: '2021-1-22',
          title: '突破科技 超越梦想',
          content: '要推动经济高质量发展。强化全球资源配置功能，积极配置全球资金、信息、技术、人才、货物等要素资源，'
        },{
          url: 'https://honganstatic.cls.cn/assets/web/news6.png',
          time: '2021-1-22',
          title: '赢响——腾讯区域营销解决方案战略发布会暨招商会',
          content: '2017年10月12日，“赢响——腾讯区域营销解决方案战略发布会暨招商会”在重庆隆重举行，'

        }
      ]
        const listItem = newsList.map((item, index) => {
          const background = {
            background: `url(${item.url})  no-repeat center`,
            backgroundSize: 'cover'
          }
          return (
            <NavLink 
              to={`/news/${item.title}/${index}`}
              className="news-item" key={index} 
              onClick={() => handleHeaderShowOrHide && handleHeaderShowOrHide(true)}
            >
              <div className="image-wrapper">
                <div className="image" style={background}></div>

                <div className="time">{item.time}</div>
              </div>
              <div className="news-detail">
                <div className="news-title">{item.title}</div>   
                <div className="news-content">{item.content}</div>             
              </div>
            </NavLink>
          )
        })
        return (
          <div className="news-warpper">
            <div className="news">
            
              <div className="news-top">
                <div className="main-title">新闻动态</div>
                <div className="main-content">{listItem}</div>
              </div>
            </div>
            <div className="footer">
              <Footer />
            </div>
          </div>
        )
    }
}

const mapDispatch = (dispatch) => {
  return {
      handleHeaderShowOrHide(value) {
          dispatch(actionCreators.handleHeaderShowOrHide(value));
      }
  }
}

export default connect(null, mapDispatch)(News);
