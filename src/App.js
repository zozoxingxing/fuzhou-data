import React from 'react';
import {connect} from 'react-redux';
import Header from './components/header'

const App = props => {
    const {headerShow, children} = props;
    return (
        <div>
            {headerShow ? <Header/> : ''}
            {children}
        </div>
    )
}

const mapState = (state) => ({
    headerShow: state.getIn(['header', 'headerShow']),
})

export default connect(mapState)(App);