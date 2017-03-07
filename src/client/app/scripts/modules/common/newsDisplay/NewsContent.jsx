import React from 'react';

const NewsContent = props => (
  <div className={props.contentClass}>
    <div className="newsblock-source">
      Author: {props.news.author}
    </div>
    <div className="newsblock-title">
      Title: {props.news.title}
    </div>
    <div className="newsblock-content">
      News: {props.news.description}
    </div>
  </div>
);

NewsContent.propTypes = {
  news: React.PropTypes.object.isRequired,
  contentClass: React.PropTypes.string.isRequired,
};

export default NewsContent;
