import React from 'react';

const NewsContent = props => (
  <div className={props.contentClass}>
    <div className="newsblock-source">
      {props.activeSource}
    </div>
    <div className="newsblock-title">
      {props.news.title}
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
