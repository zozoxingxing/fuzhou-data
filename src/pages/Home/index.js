import React, {useState, useEffect, useCallback} from 'react'
import {connect} from 'react-redux';
import './index.scss'
import Swiper from 'swiper/js/swiper.js';
import "swiper/css/swiper.min.css"
import {actionCreators as headerActionCreators} from '../../components/header/store';
import { actionCreators } from './store';

import Produce from '../../components/product'
import Recommend from '../../components/recommend'
import Unit from '../../components/unit'
import Plan from '../../components/plan'
import News from '../../components/news'
import Slide from '../../components/slide'

const Home = props => {
    const {handleHeaderShowOrHide, handleSwiperIndex, handleSwiperComponent} = props;
    const [height, setHeight] = useState(0);
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
        const swiper = new Swiper('.swiper-container4', {
            direction: 'vertical',
            slidesPerView: 1,
            mousewheel: true,
            on: {
                slideChange: function () {
                  handleSwiperIndex && handleSwiperIndex(this.activeIndex);
                  handleHeaderShowOrHide && handleHeaderShowOrHide(!this.activeIndex)
                },
            }
        })
        handleSwiperComponent && handleSwiperComponent(swiper);
    }, [height])

    let scale = 1;
    if (height >= 749) scale = 1
    else if (height >= 624) scale = 0.8
    else if (height >= 535) scale = 0.7
    else if (height >= 468) scale = 0.6
    else if (height >= 374) scale = 0.5

    const style = {transform: `scale(${scale})`};

    return (
        <div style={{overflow: 'hidden'}}>
            <div className="page-wrapper">
                <div
                    className="swiper-container4 swiper-no-swiping"
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
                            <div style={{width: '100%'}}><Plan/></div>
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
        </div>
    )
}

const mapState = (state) => ({
    headerShow: state.getIn(['header', 'headerShow']),
})

const mapDispatch = (dispatch) => {
    return {
        handleHeaderShowOrHide(value) {
            dispatch(headerActionCreators.handleHeaderShowOrHide(value));
        },
        handleSwiperIndex(value) {
          dispatch(actionCreators.handleSwiperChange(value));
        },
        handleSwiperComponent(value) {
          dispatch(actionCreators.handleSwiperComponent(value));
        }
    }
}

export default connect(mapState, mapDispatch)(Home);
