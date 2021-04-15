import React from 'react'
import {connect} from 'react-redux';
import { Icon } from 'antd'
import './index.scss'

 const Tips = (props) => {
   const {swiperComponent} = props;

    const handleClick = () => {
      if (swiperComponent) {
        swiperComponent.slideTo(0, 1000, false);//切换到第一个slide，速度为1秒
      }
    }

    const MyIcon = Icon.createFromIconfontCN({
      scriptUrl: '//at.alicdn.com/t/font_1088726_x2v7dt2kvt8.js', // 在 iconfont.cn 上生成
    });

    return (
      <div className='tips-wrap'>
        <div className='tips-go-up' onClick={handleClick}>
          <MyIcon type="iconhuidaodingbu" />
        </div>
      </div>
    );
}

const mapState = (state) => ({
  swiperComponent: state.getIn(['home', 'swiperComponent']),
})

export default connect(mapState)(Tips);
