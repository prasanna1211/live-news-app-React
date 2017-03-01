import React from 'react';

const NewsBlock = props => (
  <div className="row news-block-outer">
    <div key={props.news.title} className="col-md-11 news-block">
      <div className="row">
        <div className="news-image col-md-4">
          <img src={props.news.urlToImage} width="20%" height="30%" alt="news" />
        </div>
        <div className="col-md-7">
          <h5> Author: {props.news.author} </h5>
          <h4> Title: {props.news.title} </h4>
          <i> News: {props.news.description} </i>
        </div>
      </div>
    </div>
  </div>
);

NewsBlock.propTypes = {
  news: React.PropTypes.object.isRequired,
};
export default NewsBlock;
