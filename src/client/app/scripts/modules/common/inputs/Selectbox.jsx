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

class Selectbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.onChangeSelect = this.onChangeSelect.bind(this);
  }

  onChangeSelect(e) {
    this.props.onChangeSelectbox(e.target.value);
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    return (
      <select onChange={this.onChangeSelect} value={this.state.value}>
        {RenderOptions(this.props)}
      </select>
    );
  }
}

Selectbox.propTypes = {
  onChangeSelectbox: React.PropTypes.func.isRequired,
};

export default Selectbox;
