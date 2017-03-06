/* global it, describe */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Selectbox from '../inputs/Selectbox.jsx';

describe('inputs -> <Selectbox />', () => {
  const options = [
    { name: 'option1', value: 'option1' },
    { name: 'option2', value: 'option2' },
  ];

  it(' renders number of options as passed ', () => {
    const wrapper = shallow(<Selectbox options={options} onChangeSelectbox={() => {}} />);
    expect(wrapper.find('option')).to.have.length(2);
  });

  it(' changes the number of options by changing the component props ', () => {
    const wrapper = shallow(<Selectbox options={options} onChangeSelectbox={() => {}} />);
    expect(wrapper.find('option')).to.have.length(2);
    wrapper.setProps({
      options: [
        { name: 'option1', value: 'option1' },
        { name: 'option2', value: 'option2' },
        { name: 'option3', value: 'option3' },
      ],
    });
    expect(wrapper.find('option')).to.have.length(3);
  });
});
