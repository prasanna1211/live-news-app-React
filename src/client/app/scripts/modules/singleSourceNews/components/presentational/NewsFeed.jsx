import React from 'react';
import _ from 'underscore';
import NewsBlock from 'scripts/modules/common/newsDisplay/NewsBlock.jsx';

const renderNews = (props) => {
  return _.map(props.newsData, newsItem => (
    <div className="newsfeed-item" key={Math.random() * Math.random()}>
      <NewsBlock
        news={newsItem}
        divRowClass="row"
        divColClass="col-md-12"
        imgRowClass="newsfeed-image"
        contentClass="newsfeed-content"
      />
    </div>
  ));
};

const NewsFeed = props => (
  <div className="news-feed">
    { props.newsApicallSuccess ? renderNews(props): null }
  </div>
);

NewsFeed.propTypes = {
  newsData: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
  ]),
};

NewsFeed.defaultProps = {
  newsData: [],
};

export default NewsFeed;
