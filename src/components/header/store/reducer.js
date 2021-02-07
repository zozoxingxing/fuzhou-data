import {fromJS} from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    headerShow: true
})

export default (state = defaultState, action) => {
    // immutable 对象的 set 方法，会结合之前 immoutable 对象的值和设置的值，返回一个全新的对象
    switch (action.type) {
        case constants.HEADER_SHOW_OR_HIDE:
            return state.set('headerShow', action.value)
        default:
            return state
    }
}