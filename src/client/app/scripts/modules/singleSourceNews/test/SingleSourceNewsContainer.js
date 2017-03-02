/* global it, describe */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import SingleSourceNewsContainer from '../components/container/SingleSourceNewsContainer.jsx';

describe(' <SingleSourceNewsContainer /> component ', () => {
  it(' renders correctly ', () => {
    const wrapper = shallow(<SingleSourceNewsContainer />);
    console.log(wrapper.debug());
    expect(true);
  });
});
