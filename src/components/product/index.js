import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.scss"
import './index.scss'

export default class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
         
        }
    }

    render() {
      return (
        <div className="featuresWrapper">
          <div className="top">
            <div className="title">产品服务</div>
          </div>
          <div className="content">
            <div className="swiper-container">
            <Swiper
              Autoplay
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
            </div>
            <div className="word"></div>
          </div>
        </div>
      )
    }
}
