import React from 'react';

const NewsContent = props => (
  <div className="w3-container w3-white news-content">
    <div><b>{props.news.title}</b></div>
    <div>{props.news.description}</div>
  </div>
);

NewsContent.propTypes = {
  news: React.PropTypes.object.isRequired,
};

export default NewsContent;
