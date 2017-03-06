import React from 'react';

const NewsBlock = props => (
  <div className={props.divRowClass}>
    <div key={props.news.title} className={props.divColClass}>
      <div className={props.imgRowClass}>
        <img src={props.news.urlToImage} alt="news" />
      </div>
      <div className={props.contentClass}>
        <h5> Author: {props.news.author} </h5>
        <h4> Title: {props.news.title} </h4>
        <h4> News: {props.news.description} </h4>
      </div>
    </div>
  </div>
);

NewsBlock.propTypes = {
  news: React.PropTypes.object.isRequired,
  divRowClass: React.PropTypes.string.isRequired,
  divColClass: React.PropTypes.string.isRequired,
  imgRowClass: React.PropTypes.string.isRequired,
  contentClass: React.PropTypes.string.isRequired,
};
export default NewsBlock;
