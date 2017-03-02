/* global it, describe */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Selectbox from 'scripts/modules/common/inputs/Selectbox.jsx';
import SourceSelect from '../components/presentational/SourceSelect.jsx';


describe(' <SourceSelect /> component ', () => {
  const options = [
    { name: 'option1', value: 'option1' },
    { name: 'option2', value: 'option2' },
  ];

  it(' renders selectbox', () => {
    const wrapper = shallow(<SourceSelect options={options} onChangeSource={() => {}} />);
    expect(wrapper.find(Selectbox)).to.have.length(1);
  });
});
