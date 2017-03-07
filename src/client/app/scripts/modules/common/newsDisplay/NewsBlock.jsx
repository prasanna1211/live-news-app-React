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
      return null;
    }
    return (
      <div className={imageLoadedSuccess ? 'newsfeed-item' : null}>
        <div className={this.props.divRowClass}>
          <div key={this.props.news.title} className={this.props.divColClass}>
            <div className={this.props.imgRowClass}>
              <img
                src={this.props.news.urlToImage}
                alt="news"
                onLoad={this.onLoad}
                onError={this.onError}
              />
            </div>
            {imageLoadedSuccess ? <NewsContent {...this.props} /> : null }
          </div>
        </div>
      </div>
    );
  }
}

NewsBlock.propTypes = {
  news: React.PropTypes.object.isRequired,
  divRowClass: React.PropTypes.string.isRequired,
  divColClass: React.PropTypes.string.isRequired,
  imgRowClass: React.PropTypes.string.isRequired,
};
export default NewsBlock;
