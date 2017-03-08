import React from 'react';
import NewsContent from './NewsContent.jsx';

class NewsBlock extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      imageLoadedSuccess: false,
      imageLoadedError: false,
    };
    this.onLoad = this.onLoad.bind(this);
    this.onError = this.onError.bind(this);
  }

  onLoad() {
    this.setState({
      imageLoadedSuccess: true,
    });
  }

  onError() {
    this.setState({
      imageLoadedError: true,
    });
  }

  render() {
    const { imageLoadedSuccess, imageLoadedError } = this.state;
    if (imageLoadedError) {
      return (<div> error </div>);
    }
    return (
      <div className="news-block">
        <div className="w3-container w3-margin-bottom">
          <img
            src={this.props.news.urlToImage}
            alt="news"
            onLoad={this.onLoad}
            onError={this.onError}
            className="w3-hover-opacity"
          />
          { imageLoadedSuccess ? <NewsContent {...this.props} /> : null }
        </div>
      </div>
    );
  }
}

NewsBlock.propTypes = {
  news: React.PropTypes.object.isRequired,
};
export default NewsBlock;
