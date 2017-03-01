/**
 * Selectbox component providing callback for onChange
 */

import React from 'react';
import _ from 'underscore';

/**
 * Renders the options
 */
const RenderOptions = (props) => {
  return _.map(props.options, (option) => {
    return (
      <option
        key={option.value}
        value={option.value}
      >
        {option.name}
      </option>
    );
  });
};

const Selectbox = props => (
  <select onChange={props.onChangeSelectbox}>
    {RenderOptions(props)}
  </select>
);

Selectbox.propTypes = {
  onChangeSelectbox: React.PropTypes.func.isRequired,
};

export default Selectbox;
