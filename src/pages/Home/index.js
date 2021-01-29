import React, { Component } from 'react'

import './index.scss'

import Produce from '../../components/product'
import Recommend from '../../components/recommend'
import Experience from '../../components/experience'
import Merchant from '../../components/merchant'
import Tengyun from '../../components/tengyun'
import Slide from '../../components/slide'
export default class home extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <Slide />
        <Produce />
        <Recommend />
        <Experience />
        <Merchant />
        <Tengyun />
      </div>
    )
  }
}
