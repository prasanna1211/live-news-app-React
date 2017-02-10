/**
 * Sidebar component
 */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectNewsType } from './actionCreators/index.js';

const Sidebar = (props) => (
  <div className="sidebar-main">
    <div className="sidebar">
      <ul className="sidebar-ul">
        <li onClick = { () => { props.selectNewsType("singleSource") } } className="sidebar-li">
          Single Source News
        </li>
        <li className="sidebar-li">
          News Feed
        </li>
        <li className="sidebar-li">
          Others
        </li>
      </ul>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {

  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    selectNewsType: bindActionCreators(selectNewsType, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
