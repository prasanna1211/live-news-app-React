/* global it, describe */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import _ from 'underscore';

import NewsBlock from 'scripts/modules/common/newsDisplay/NewsBlock.jsx';
import NewsFeed from '../components/presentational/NewsFeed.jsx';


describe(' <NewsFeed /> Component ', () => {
  const baseProps = {
    newsData: [{}],
    newsApicallSuccess: true,
  };
  it(' renders <NewsBlock /> ', () => {
    const wrapper = shallow(<NewsFeed {...baseProps} />);
    expect(wrapper.find(NewsBlock)).to.have.length(1);
  });

  it(' renders correct number of <NewsBlock /> ', () => {
    const props = _.extend(baseProps, {
      newsData: [{}, {}],
    });
    const wrapper = shallow(<NewsFeed {...props} />);
    expect(wrapper.find(NewsBlock)).to.have.length(2);
  });
});

