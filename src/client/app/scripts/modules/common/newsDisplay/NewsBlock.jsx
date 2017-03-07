import React from 'react';

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
    let { imageLoadedSuccess, imageLoadedError } = this.state;
    return (
      <div className={imageLoadedSuccess ? "newsfeed-item" : null}>
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
            {
              imageLoadedSuccess ? (
                <div className={this.props.contentClass}>
                <div className="newsblock-source">
                  Author: {this.props.news.author}
                </div>
                <div className="newsblock-title">
                  Title: {this.props.news.title}
                </div>
                <div className="newsblock-content">
                  News: {this.props.news.description}
                </div>
              </div>
              ) : null
            }

          </div>
        </div>
      </div>
    );
    if(imageLoadedError) {
      return null;
    }
    return (
      <div> Loading... </div>
    );
  }
}

NewsBlock.propTypes = {
  news: React.PropTypes.object.isRequired,
  divRowClass: React.PropTypes.string.isRequired,
  divColClass: React.PropTypes.string.isRequired,
  imgRowClass: React.PropTypes.string.isRequired,
  contentClass: React.PropTypes.string.isRequired,
};
export default NewsBlock;
