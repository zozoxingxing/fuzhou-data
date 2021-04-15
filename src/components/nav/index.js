import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { withRouter } from 'react-router-dom';

class nav extends Component {
   
    render() {
      const pathname = this.props.location.pathname;
        const navList = [
          {
            name: '首页',
            url: '/home',
            position: 'left'
          },{
            name: '关于我们',
            url: '/about',
            position: 'left'
          }
        ]
        const listItem = navList.map((item, index) => {
          return (
            <div
              key={index} 
              className={`${item.url === pathname  ? 'active' : ''} ${item.position} item`} 
              >
                <Link to={item.url}>{ item.name }</Link>
            </div>
          )
        })
        return (
          <div className="nav">
            {listItem}
          </div>
        )
    }
}

export default withRouter(nav);

// onClick={() => this.onChangeNav(item, index)}
