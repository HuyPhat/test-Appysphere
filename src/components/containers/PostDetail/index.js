import React from 'react';
import { connect } from 'react-redux';
import PostDetail from 'components/presentations/PostDetail';
import * as selector from 'selector/index';
import WithLoading from 'components/presentations/WithLoading';
import PostDetailActions from 'reducer/postDetail.reducer';
import { withRouter } from 'react-router';
import { compose } from 'redux';

const PostDetailWithLoading = WithLoading(PostDetail);

class ConnectedPostDetail extends React.Component {
  componentDidMount() {
    this.props.dispatch(
      PostDetailActions.requestPostDetail(this.props.match.params.id)
    );
  }
  render() {
    const { postDetailStore } = this.props;
    return (
      <PostDetailWithLoading
        loading={postDetailStore.requestStatus === 'loading'}
        post={postDetailStore.post}
      />
    );
  }
}

const mapStateToProps = state => ({
  postDetailStore: selector.getPostDetailsReducer(state)
});

export default compose(
  withRouter,
  connect(mapStateToProps)
)(ConnectedPostDetail);

// export default connect(mapStateToProps)(ConnectedPostDetail);
