import React from 'react';
import Selectbox from '../../../common/inputs/Selectbox.jsx';

const SourceSelect = props => (
  <div className="source-select">
    <h4>{ props.sourceListApicallInitiated ? 'Loading sources...' : 'Select Source' }</h4>
    {
      !props.sourceListApicallInitiated ? (<Selectbox
        options={props.options}
        onChangeSelectbox={props.onChangeSource}
        className="source-select-selectbox"
      />) : null
    }
  </div>
);

SourceSelect.propTypes = {
  options: React.PropTypes.array.isRequired,
  onChangeSource: React.PropTypes.func.isRequired,
  sourceListApicallInitiated: React.PropTypes.bool.isRequired,
};

export default SourceSelect;
