/* global describe, it */
import 'jsdom-global/register';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import _ from 'underscore';
import { SingleSourceNewsContainer } from '../components/container/SingleSourceNewsContainer.jsx';
import NewsFeed from '../components/presentational/NewsFeed.jsx';
import SourceSelect from '../components/presentational/SourceSelect.jsx';

describe('<SingleSourceNewsContainer />', () => {
  const baseProps = {
    sourceFetchAction: () => {},
    newsFetchAction: () => {},
    sourceList: [],
    newsData: [],
  };
  const sourceListArray = [
    { name: 'source1', value: 'source1' },
    { name: 'source2', value: 'source2' },
  ];
  const newsData = [
    {
      author: 'author',
      description: '',
      publishedAt: '',
      title: '',
      url: '',
      urlToImage: '',
    },
  ];

  it(' renders <SourceSelect /> and <NewsFeed /> component ', () => {
    const props = _.extend(baseProps, {
      sourceList: sourceListArray,
      newsData,
    });
    const wrapper = shallow(<SingleSourceNewsContainer {...props} />);
    expect(wrapper.find(SourceSelect)).to.have.length(1);
    expect(wrapper.find(NewsFeed)).to.have.length(1);
  });

  it(' calls componentDidMount function ', () => {
    const props = _.extend(baseProps, {});
    sinon.spy(SingleSourceNewsContainer.prototype, 'componentDidMount');
    mount(<SingleSourceNewsContainer {...props} />);
    expect(SingleSourceNewsContainer.prototype.componentDidMount.calledOnce).to.equal(true);
  });

  it(' changing active source fetches new newslist data ', () => {
    const props = _.extend(baseProps, {
      newsFetchAction: sinon.spy(),
      sourceListApicallInitiated: false,
      sourceListApicallSuccess: true,
    });
    const wrapper = mount(<SingleSourceNewsContainer {...props} />);
    wrapper.find('select').simulate('change', { target: { value: 'source2' } });
    expect(wrapper.find('select').props().value).to.equal('source2');
    wrapper.find('select').simulate('change', { target: { value: 'source1' } });
    expect(wrapper.find('select').props().value).to.equal('source1');
  });
});
