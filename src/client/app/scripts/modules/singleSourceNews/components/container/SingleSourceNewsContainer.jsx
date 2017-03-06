import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SourceSelect from '../presentational/SourceSelect.jsx';
import NewsFeed from '../presentational/NewsFeed.jsx';
import { sourceFetchActionCreators, newsFetchActionCreators } from '../../actionCreators/actionCreators.js';
import { getSourceList, getSourceListInitiatedStatus, getSourceListSuccessStatus, getNewsData, getNewsInitiatedStatus, getNewsSuccessStatus } from '../../selectors/selectors.js';

export class SingleSourceNewsContainer extends React.Component {

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

  onChangeSource(activeSource) {
    this.setState({
      activeSource,
    });
  }

  render() {
    return (
      <div className="content">
        <SourceSelect
          onChangeSource={this.onChangeSource}
          options={this.props.sourceList}
          sourceListApicallInitiated={this.props.sourceListApicallInitiated}
        />
        <NewsFeed
          newsData={this.props.newsData}
        />
      </div>
    );
  }
}

SingleSourceNewsContainer.propTypes = {
  sourceFetchAction: React.PropTypes.func.isRequired,
  sourceList: React.PropTypes.array.isRequired,
  newsFetchAction: React.PropTypes.func.isRequired,
  newsData: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
  ]),
  sourceListApicallInitiated: React.PropTypes.bool,
};

SingleSourceNewsContainer.defaultProps = {
  newsData: [],
  sourceListApicallInitiated: false,
};

export const mapStateToProps = (state) => {
  return {
    sourceList: getSourceList(state),
    sourceListApicallInitiated: getSourceListInitiatedStatus(state),
    sourceListApicallSuccess: getSourceListSuccessStatus(state),
    newsApicallInitiated: getNewsInitiatedStatus(state),
    newsApiCallSuccess: getNewsSuccessStatus(state),
    newsData: getNewsData(state),
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    sourceFetchAction: bindActionCreators(sourceFetchActionCreators, dispatch),
    newsFetchAction: bindActionCreators(newsFetchActionCreators, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleSourceNewsContainer);
