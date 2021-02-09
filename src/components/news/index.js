
import React, { Component } from 'react'
import Footer from '../../components/footer'
import './index.scss'
import news1 from '../../assets/images/news1.png';
// import { Link } from 'react-router-dom'

export default class News extends Component {
  
    render() {
      const newsList = [
        {
          url: 'https://honganstatic.cls.cn/assets/web/news1.png',
          time: '2021-1-22',
          title: '这是一个新闻标题',
          content: '它的主要特点是伸缩容器有能力让它的伸缩项目改变它的宽度顺序等来最合适地填充可用空间。是伸缩容器有能力让它的伸缩项目改变它的宽是伸缩容器有能力让它的伸缩项目改变它的宽是伸缩容器有能力让它的伸缩项目改变它的宽'
        },{
          url: 'https://honganstatic.cls.cn/assets/web/news2.png',
          time: '2021-1-22',
          title: '这是一个新闻标题',
          content: '它的主要特点是伸缩容器有能力让它的伸缩项目改变它的宽度顺序等来最合适地填充可用空间。'

        },{
          url: 'https://honganstatic.cls.cn/assets/web/news3.png',
          time: '2021-1-22',
          title: '这是一个新闻标题',
          content: '它的主要特点是伸缩容器有能力让它的伸缩项目改变它的宽度顺序等来最合适地填充可用空间。'
        },
        {
          url: 'https://honganstatic.cls.cn/assets/web/news4.png',
          time: '2021-1-22',
          title: '这是一个新闻标题',
          content: '它的主要特点是伸缩容器有能力让它的伸缩项目改变它的宽度顺序等来最合适地填充可用空间。'

        },{
          url: 'https://honganstatic.cls.cn/assets/web/news5.png',
          time: '2021-1-22',
          title: '这是一个新闻标题',
          content: '它的主要特点是伸缩容器有能力让它的伸缩项目改变它的宽度顺序等来最合适地填充可用空间。'
        },{
          url: 'https://honganstatic.cls.cn/assets/web/news6.png',
          time: '2021-1-22',
          title: '这是一个新闻标题',
          content: '它的主要特点是伸缩容器有能力让它的伸缩项目改变它的宽度顺序等来最合适地填充可用空间。'

        }
      ]
        const listItem = newsList.map((item, index) => {
          const background = {
            background: `url(${item.url})  no-repeat center`,
            backgroundSize: 'cover'
          }
          return (
            <div className="news-item" key={index}>
              <div className="image-wrapper">
                <div className="image" style={background}></div>

                <div className="time">{item.time}</div>
              </div>
              <div className="news-detail">
                <div className="news-title">{item.title}</div>   
                <div className="news-content">{item.content}</div>             
              </div>
            </div>
          )
        })
        return (
          <div className="news-warpper">
            <div className="news">
              <div className="news-top" onClick={()=>{window.open('/news', '_brank')}}>
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
