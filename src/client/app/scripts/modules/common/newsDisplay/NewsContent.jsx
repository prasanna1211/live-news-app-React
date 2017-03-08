import React from 'react';

const NewsContent = props => (
  <div className="w3-container w3-white">
    <p><b>{props.news.title}</b></p>
    <p>{props.news.description}</p>
  </div>
);

NewsContent.propTypes = {
  news: React.PropTypes.object.isRequired,
};

export default NewsContent;
