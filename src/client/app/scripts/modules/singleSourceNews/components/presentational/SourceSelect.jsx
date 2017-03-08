import React from 'react';
import Selectbox from '../../../common/inputs/Selectbox.jsx';

const SourceSelect = props => (
  <div className="source-select">
    <h4 className="content-header">{ props.sourceListApicallInitiated ? 'Loading sources...' : 'Select Source' }</h4>
    {
      props.sourceListApicallSuccess ? (<Selectbox
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
  sourceListApicallSuccess: React.PropTypes.bool,
};

SourceSelect.defaultProps = {
  sourceListApicallSuccess: false,
};

export default SourceSelect;
