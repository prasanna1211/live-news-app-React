import React from 'react';
import _ from 'underscore';
import NewsBlock from 'scripts/modules/common/newsDisplay/NewsBlock.jsx';

const renderNews = (data) => {
  return _.map(data, newsItem => (
    <NewsBlock
      key={Math.random() * Math.random()}
      news={newsItem}
      divRowClass="row"
      divColClass="col-md-12"
      imgRowClass="newsfeed-image"
      contentClass="newsfeed-content"
    />
  ));
};

const NewsFeed = props => (
  <div className="news-feed">
    { props.newsApicallSuccess ? renderNews(props.newsData) : null }
  </div>
);

NewsFeed.propTypes = {
  newsData: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
  ]),
  newsApicallSuccess: React.PropTypes.bool.isRequired,

};

NewsFeed.defaultProps = {
  newsData: [],
};

export default NewsFeed;
