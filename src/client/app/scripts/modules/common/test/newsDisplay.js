/* global it, describe */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import NewsBlock from '../newsDisplay/NewsBlock.jsx';

describe('newsDisplay -> <NewsBlock />', () => {
  const news = {
    author: 'author',
    title: 'title',
    description: 'description',
    urlToImage: 'url',
  };

  it(' renders everything correctly ', () => {
    const wrapper = shallow(<NewsBlock news={news} />);
    expect(wrapper.find('h4')).to.have.length(2);
    expect(wrapper.find('h5')).to.have.length(1);
    expect(wrapper.find('img')).to.have.length(1);
  });
});
