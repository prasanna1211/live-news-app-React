/* global it, describe */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import NewsBlock from 'scripts/modules/common/newsDisplay/NewsBlock.jsx';
import NewsFeed from '../components/presentational/NewsFeed.jsx';


describe(' <NewsFeed /> Component ', () => {
  it(' renders <NewsBlock /> ', () => {
    const wrapper = shallow(<NewsFeed
      newsData={[{}]}
      divRowClass="row"
      divColClass="col-md-12"
      imgRowClass="newsfeed-image"
      contentClass="newsfeed-content"
    />);
    expect(wrapper.find(NewsBlock)).to.have.length(1);
  });

  it(' renders correct number of <NewsBlock /> ', () => {
    const wrapper = shallow(<NewsFeed newsData={[{}, {}]} />);
    expect(wrapper.find(NewsBlock)).to.have.length(2);
  });

  it(' changing props changes the number of <NewsBlock /> ', () => {
    const wrapper = shallow(<NewsFeed newsData={[]} />);
    wrapper.setProps({ newsData: [{}] });
    expect(wrapper.find(NewsBlock)).to.have.length(1);
  });
});

