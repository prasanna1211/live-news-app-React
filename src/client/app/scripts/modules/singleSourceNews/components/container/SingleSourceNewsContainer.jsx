import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SourceSelect from '../presentational/SourceSelect.jsx';
import NewsFeed from '../presentational/NewsFeed.jsx';
import { sourceFetchActionCreators, newsFetchActionCreators } from '../../actionCreators/actionCreators.js';
import { getSourceList, getSourceListInitiatedStatus, getSourceListSuccessStatus, getNewsData, getNewsInitiatedStatus, getNewsSuccessStatus } from '../../selectors/selectors.js';

class SingleSourceNewsContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeSource: '',
    };
    this.onChangeSource = this.onChangeSource.bind(this);
  }

  componentDidMount() {
    this.props.sourceFetchAction();
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.activeSource !== nextState.activeSource) {
      // Fetch the news of this source
      this.props.newsFetchAction(nextState.activeSource, 'top');
    }
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
          options={this.props.sourceList}
        />
        <NewsFeed />
      </div>
    );
  }
}

SingleSourceNewsContainer.propTypes = {
  sourceFetchAction: React.PropTypes.func.isRequired,
  sourceList: React.PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    sourceList: getSourceList(state),
    sourceListApicallInitiated: getSourceListInitiatedStatus(state),
    sourceListApicallSuccess: getSourceListSuccessStatus(state),
    newsApicallInitiated: getNewsInitiatedStatus(state),
    newsApiCallSuccess: getNewsSuccessStatus(state),
    newsData: getNewsData(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sourceFetchAction: bindActionCreators(sourceFetchActionCreators, dispatch),
    newsFetchAction: bindActionCreators(newsFetchActionCreators, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleSourceNewsContainer);
