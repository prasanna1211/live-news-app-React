/* global it, describe */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import NewsBlock from '../newsDisplay/NewsBlock.jsx';
import NewsContent from '../newsDisplay/NewsContent.jsx';

describe('newsDisplay -> <NewsBlock />', () => {
  const props = {
    news: {
      author: 'author',
      title: 'title',
      description: 'description',
      urlToImage: 'url',
    },
    divRowClass: '',
    divColClass: '',
    imgRowClass: '',
    contentClass: '',
  };

  it(' renders Component as desired ', () => {
    const wrapper = shallow(<NewsBlock {...props} />);
    expect(wrapper.find(NewsContent).exists()).to.equal(false);
    wrapper.setState({
      imageLoadedSuccess: true,
    });
    expect(wrapper.find(NewsContent).exists()).to.equal(true);
    wrapper.setState({
      imageLoadedError: true,
      imageLoadedSuccess: false,
    });
    expect(wrapper.find(NewsContent).exists()).to.equal(false);
  });
});
