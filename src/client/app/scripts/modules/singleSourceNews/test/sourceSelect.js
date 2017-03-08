/* global it, describe */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import _ from 'underscore';

import Selectbox from 'scripts/modules/common/inputs/Selectbox.jsx';
import SourceSelect from '../components/presentational/SourceSelect.jsx';


describe(' <SourceSelect /> component ', () => {
  const options = [
    { name: 'option1', value: 'option1' },
    { name: 'option2', value: 'option2' },
  ];
  const baseProps = {
    options,
    onChangeSource: () => {},
    sourceListApicallInitiated: true,
    sourceListApicallISuccess: false,
  };
  it(' renders selectbox only when it is fetched successfully', () => {
    const initiatedProps = _.extend(baseProps, {});
    const initiatedWrapper = shallow(<SourceSelect {...initiatedProps} />);
    expect(initiatedWrapper.find(Selectbox)).to.have.length(0);
    const successProps = _.extend(baseProps, { sourceListApicallInitiated: false, sourceListApicallSuccess: true });
    const successWrapper = shallow(<SourceSelect {...successProps} />);
    expect(successWrapper.find(Selectbox)).to.have.length(1);
  });
});
