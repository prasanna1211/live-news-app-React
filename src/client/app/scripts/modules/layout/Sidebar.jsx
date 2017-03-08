/**
 * Sidebar component
 */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectActiveNewsType } from './actionCreators/index.js';
import { getActiveNewsType } from './selectors/selector.js';

const Sidebar = props => (
  <div className="sidebar-main">
    <div className="sidebar">
      <ul className="sidebar-ul">
        <li
          onClick={() => { props.selectActiveNewsType('singleSource'); }}
          className={`sidebar-li ${(props.activeNewsType === 'singleSource') ? 'active' : ''}`}
        >
          Read A Source
        </li>
        <li
          onClick={() => { props.selectActiveNewsType('newsFeed'); }}
          className={`sidebar-li ${(props.activeNewsType === 'newsFeed') ? 'active' : ''}`}
        >
          Latest News
        </li>
        <li
          onClick={() => { props.selectActiveNewsType('others'); }}
          className={`sidebar-li ${(props.activeNewsType === 'others') ? 'active' : ''}`}
        >
          Others
        </li>
      </ul>
    </div>
  </div>
);

Sidebar.propTypes = {
  selectActiveNewsType: React.PropTypes.func.isRequired,
  activeNewsType: React.PropTypes.string,
};

Sidebar.defaultProps = {
  activeNewsType: '',
};

const mapStateToProps = (state) => {
  return {
    activeNewsType: getActiveNewsType(state),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    selectActiveNewsType: bindActionCreators(selectActiveNewsType, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
