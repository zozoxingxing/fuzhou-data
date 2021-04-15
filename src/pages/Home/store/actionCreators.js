import * as constants from './constants';

export const handleSwiperChange = (value) => ({
  type: constants.HANDLE_SWIPER_CHANGE_INDEX,
  value
})

export const handleSwiperComponent = (value) => ({
  type: constants.HANDER_SWIPER_COMPONENT,
  value
})