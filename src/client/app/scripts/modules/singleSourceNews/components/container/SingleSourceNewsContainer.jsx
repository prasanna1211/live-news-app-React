import React from 'react';
import SourceSelect from '../presentational/SourceSelect.jsx';
import NewsFeed from '../presentational/NewsFeed.jsx';

class SingleSourceNewsContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeSource: '',
    };
    this.options = [
      { name: 'a', value: 'a' },
      { name: 'b', value: 'b' },
    ];
    this.onChangeSource = this.onChangeSource.bind(this);
  }

  onChangeSource(event) {
    this.setState({
      activeSource: event.target.value,
    });
  }

  render() {
    return (
      <div>
        Container
        <SourceSelect
          onChangeSource={this.onChangeSource}
          options={this.options}
        />
        <NewsFeed />
      </div>
    );
  }
}

export default SingleSourceNewsContainer;
