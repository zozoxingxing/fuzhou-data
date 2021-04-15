import {fromJS} from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    swiperIndex: 0,
    swiperComponent: null,
})

export default (state = defaultState, action) => {
    // immutable 对象的 set 方法，会结合之前 immoutable 对象的值和设置的值，返回一个全新的对象
    switch (action.type) {
        case constants.HANDLE_SWIPER_CHANGE_INDEX:
            return state.set('swiperIndex', action.value)
        case constants.HANDER_SWIPER_COMPONENT:
            return state.set('swiperComponent', action.value)
        default:
            return state
    }
}