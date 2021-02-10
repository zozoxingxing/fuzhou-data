import React, {useState, useEffect, useCallback} from 'react'
import {connect} from 'react-redux';
import axios from 'axios';
import './index.scss'
import Swiper from 'swiper/js/swiper.js';
import "swiper/css/swiper.min.css"
import {actionCreators} from '../../components/header/store';

import Produce from '../../components/product'
import Recommend from '../../components/recommend'
import Unit from '../../components/unit'
import Plan from '../../components/plan'
import News from '../../components/news'
import Slide from '../../components/slide'

const Home = props => {
    const {handleHeaderShowOrHide} = props;
    const [height, setHeight] = useState(0);
    // const [scrollTop, setScrollTop] = useState(0);

    useEffect(()=>{
      axios({
        method: 'post',
        url: '/user/auth',
        data: {
          "password": "123",
          "phoneNumber": "18621666570"
        }
      })
    },[])

    const onResize = useCallback(() => {
        setHeight(document.body.clientHeight)
    }, [])

    useEffect(() => {
        setHeight(document.body.clientHeight)
        // setScrollTop(Math.max(document.documentElement.scrollTop, document.body.scrollTop))
        window.addEventListener('resize', onResize);
        return (() => {
            window.removeEventListener('resize', onResize)
        })
    }, [height])

    useEffect(() => {
        new Swiper('.swiper-container4', {
            direction: 'vertical',
            slidesPerView: 1,
            mousewheel: true,
            on: {
                slideChange: function () {
                    handleHeaderShowOrHide && handleHeaderShowOrHide(!this.activeIndex)
                },
            }
        })
    }, [height])

    let scale = 1;
    if (height >= 749) scale = 1
    else if (height >= 624) scale = 0.8
    else if (height >= 535) scale = 0.7
    else if (height >= 468) scale = 0.6
    else if (height >= 374) scale = 0.5

    const style = {transform: `scale(${scale})`};

    return (
        <div className="page-wrapper">
            <div
                className="swiper-container4"
                style={{height: height}}
            >
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div style={{width: '100%'}}><Slide/></div>
                    </div>
                    <div className="swiper-slide">
                        <div style={{width: '100%', ...style}}><Produce/></div>
                    </div>
                    <div className="swiper-slide">
                        <div style={{width: '100%', ...style}}><Recommend/></div>
                    </div>
                    <div className="swiper-slide">
                        <div style={{width: '100%', ...style}}><Plan/></div>
                    </div>
                    <div className="swiper-slide">
                        <div style={{width: '100%', ...style}}><Unit/></div>
                    </div>
                    <div className="swiper-slide">
                        <div style={{width: '100%', height: '100%'}}><News/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapState = (state) => ({
    headerShow: state.getIn(['header', 'headerShow']),
})

const mapDispatch = (dispatch) => {
    return {
        handleHeaderShowOrHide(value) {
            dispatch(actionCreators.handleHeaderShowOrHide(value));
        }
    }
}

export default connect(mapState, mapDispatch)(Home);
