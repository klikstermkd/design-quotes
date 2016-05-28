import React from 'react';
import NavLink from './NavLink';
import { connect } from 'react-redux';

const App = ({ children, menuBorderPosition }) => (
  <div>
    <div className="header">Design quotes</div>
    <div className="main-container">
      <div className="sidebar">
        <div className="box"></div>
      </div>
      <div className="right-container">
        <div className="toolbar">
          <div className="menu-container">
            <div className="menu-border" style={{ transform: 'translate(' + menuBorderPosition + 'px, 22px)' }}></div>
            <div className="menu">
              <span><NavLink to="/quotes">Quotes</NavLink></span>
              <span><NavLink to="/books">Books</NavLink></span>
              <span><NavLink to="/posters">Posters</NavLink></span>
            </div>
          </div>
          <div className="search-container">
            <input type="text" placeholder="Search for authors, books or quotes" className="search-input" />
          </div>
        </div>
        <div className="main-content">{ children }</div>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({ menuBorderPosition: state.app.menuBorderPosition });

export default connect(mapStateToProps)(App);