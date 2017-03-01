import React from 'react';
import _ from 'underscore';
import NewsBlock from 'scripts/modules/common/newsDisplay/NewsBlock.jsx';

const renderNews = (props) => {
  return _.map(props.newsData, newsItem => (
    <NewsBlock
      news={newsItem}
    />
  ));
};

const NewsFeed = (props) => (
  <div>
    { renderNews(props) }
  </div>
);

NewsFeed.propTypes = {
  newsData: React.PropTypes.object.isRequired,
}

export default NewsFeed;
