import React, { Component } from 'react'

import './index.scss'

import Produce from '../../components/product'
import Recommend from '../../components/recommend'
import Unit from '../../components/unit'
import Plan from '../../components/plan'
import News from '../../components/news'
import Slide from '../../components/slide'
export default class home extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <Slide />
        <Produce />
        <Recommend />
        <Unit />
        <Plan />
        <News />
      </div>
    )
  }
}
