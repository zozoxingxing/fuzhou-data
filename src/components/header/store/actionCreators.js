import * as constants from './constants';

// 清空当前页面 store 所有数据
export const handleHeaderShowOrHide = (value) => ({
    type: constants.HEADER_SHOW_OR_HIDE,
    value
})