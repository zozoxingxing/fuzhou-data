import React, { useState,useEffect,useCallback } from 'react'
import './index.scss'
import  Swiper from 'swiper/js/swiper.js';
import "swiper/css/swiper.min.css"

import Produce from '../../components/product'
import Recommend from '../../components/recommend'
import Unit from '../../components/unit'
import Plan from '../../components/plan'
import News from '../../components/news'
import Slide from '../../components/slide'
const Home =props=> {
  const [height, setHeight] = useState(0);

  const onResize = useCallback(() => {
    setHeight(document.body.clientHeight)
    console.log('onResize',document.body.clientHeight);
    
}, [])

useEffect(() => {
    setHeight(document.body.clientHeight)
    window.addEventListener('resize', onResize);
    return (() => {
        window.removeEventListener('resize', onResize)
    })
}, [])

const handleScroll = () => {
  const viewHeight = document.body.clientHeight;// 网页可见区域高
  const scrollHeight = document.body.scrollHeight;// 浏览器所有内容高度
  // documentElement 对应的是 html 标签，而 body 对应的是 body 标签。
  // 当前页面的滚动条纵坐标位置 => document.documentElement.scrollTop
  // 网页被卷去的高 => document.body.scrollTop
  const scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
  // 滚动到页面底部
  if (scrollTop + viewHeight >= (scrollHeight - 50)) {
      console.log('scroll');
      
  }
}

// 滚动条添加滚动事件
useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => {
      // 移除滚动条滚动事件
      window.removeEventListener('scroll', handleScroll);
  }
}, [])

  // useEffect(()=>{
  //     new Swiper('.swiper-container4', {
  //       direction: 'vertical',
  //       slidesPerView: 1,
  //       mousewheel: true,
  //     })
  // },[height])
      
return (
  <div className="page-wrapper">
    {/* <div className="swiper-container4" style={{height: height - 76, marginTop: 76}}>
    <div className="swiper-wrapper">
        <div className="swiper-slide"><Slide/></div>
        <div className="swiper-slide"><Produce/></div>
        <div className="swiper-slide"><Recommend/></div>
        <div className="swiper-slide"><Plan/></div>
        <div className="swiper-slide"><Unit/></div>
        <div className="swiper-slide"><News/></div>
    </div>
    </div> */}
    <Slide/>
    <Produce/>
    <Recommend/>
    <Plan/>
    <Unit/>
    <News/>
  </div>
)
}

export default Home;
