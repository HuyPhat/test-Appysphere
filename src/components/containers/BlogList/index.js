import React from 'react';
import PropTypes from 'prop-types';
import WithLoading from 'components/presentations/WithLoading';
import { connect } from 'react-redux';
import * as selectors from 'selector/index';
import PostActions from 'reducer/post.reducer';
import BlogList from 'components/presentations/BlogList';

const BlogListWithLoading = WithLoading(BlogList);

class ConnectedBlogList extends React.Component {
  componentDidMount() {
    this.props.dispatch(PostActions.requestEntirePosts());
  }
  render() {
    const { requestStatus, error, data } = this.props.postStore;
    return (
      <BlogListWithLoading
        loading={requestStatus === 'loading'}
        posts={data}
        removePost={this.removePost}
      />
    );
  }
  removePost = id => {
    this.props.dispatch(PostActions.requestRemovePost(id));
  };
}

const mapStateToProps = (state, props) => ({
  postStore: selectors.getPostReducer(state)
});

export default connect(mapStateToProps)(ConnectedBlogList);
