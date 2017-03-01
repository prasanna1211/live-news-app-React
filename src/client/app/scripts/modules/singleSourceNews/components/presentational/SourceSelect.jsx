import React from 'react';
import FormInputSelectbox from '../../../common/inputs/Selectbox.jsx';

const SourceSelect = props => (
  <div>
    Selecting source
    <FormInputSelectbox
      options={props.options}
    />
  </div>
);

SourceSelect.propTypes = {
  options: React.PropTypes.array.isRequired,
};

export default SourceSelect;
