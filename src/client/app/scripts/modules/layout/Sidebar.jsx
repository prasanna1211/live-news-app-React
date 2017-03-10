/**
 * Sidebar component
 */
import React from 'react';
import _ from 'underscore';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectActiveNewsType } from './actionCreators/index.js';
import { getActiveNewsType, getSourceCategory } from './selectors/selector.js';

const renderCategories = (categories, onSelectHandler, activeNewsType) => {
  const categoriesAvailable = _.uniq(categories);
  return _.map(categoriesAvailable, (category) => {
    return (
      <li
        key={Math.random()}
        onClick={() => { onSelectHandler(category); }}
        className={`sidebar-li ${(activeNewsType === category) ? 'active' : ''}`}
      >
        {category}
      </li>
    );
  });
};

const Sidebar = props => (
  <ul className="sidebar-ul">
    <li
      key="1"
      className="sidebar-header"
    >
      +
    </li>
    {renderCategories(props.categories, props.selectActiveNewsType, props.activeNewsType)}
  </ul>
);

Sidebar.propTypes = {
  selectActiveNewsType: React.PropTypes.func.isRequired,
  categories: React.PropTypes.array,
  activeNewsType: React.PropTypes.string,
};

Sidebar.defaultProps = {
  activeNewsType: '',
  categories: [],
};

const mapStateToProps = (state) => {
  return {
    activeNewsType: getActiveNewsType(state),
    categories: getSourceCategory(state),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    selectActiveNewsType: bindActionCreators(selectActiveNewsType, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
