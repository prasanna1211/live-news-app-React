import React from 'react';
import Selectbox from '../../../common/inputs/Selectbox.jsx';

const SourceSelect = props => (
  <div>
    Selecting source
    <Selectbox
      options={props.options}
      onChangeSelectbox={props.onChangeSource}
    />
  </div>
);

SourceSelect.propTypes = {
  options: React.PropTypes.array.isRequired,
  onChangeSource: React.PropTypes.func.isRequired,
};

export default SourceSelect;
