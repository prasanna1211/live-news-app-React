import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SourceSelect from '../presentational/SourceSelect.jsx';
import NewsFeed from '../presentational/NewsFeed.jsx';
import {sourceFetchActionCreators} from '../../actionCreators/actionCreators.js';

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

  componentDidMount() {
    // Fetch list of sources
    this.props.sourceFetchAction();
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

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    sourceFetchAction: bindActionCreators(sourceFetchActionCreators, dispatch),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleSourceNewsContainer);
