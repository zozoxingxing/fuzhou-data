import React from 'react';
import {connect} from 'react-redux';
import Header from './components/header'
import Tips from './components/tips'

const App = props => {
    const {headerShow, children, swiperIndex} = props;
    
    return (
        <div>
            {headerShow ? <Header/> : ''}
            {children}
            { swiperIndex === 5 && <Tips/>}
        </div>
    )
}

const mapState = (state) => ({
    headerShow: state.getIn(['header', 'headerShow']),
    swiperIndex: state.getIn(['home', 'swiperIndex']),
})

export default connect(mapState)(App);