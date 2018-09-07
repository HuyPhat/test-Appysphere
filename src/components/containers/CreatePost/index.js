import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CreatePostForm from 'components/presentations/CreatePostForm';
import CreatePostActions from 'reducer/createPost.reducer';
import * as selector from 'selector/index';
import AppSnackbar from 'components/containers/AppSnackBar';

class ConnectedCreatePost extends React.Component {
  render() {
    const { createPostStore } = this.props;
    const creating = createPostStore.requestStatus === 'loading';
    return (
      <div>
        <CreatePostForm createPost={this.createPost} creating={creating} />
        <AppSnackbar open={createPostStore.created} />
      </div>
    );
  }
  createPost = postDetails => {
    this.props.dispatch(CreatePostActions.requestCreatePost(postDetails));
  };
}

const mapStateToProps = state => ({
  createPostStore: selector.getCreatePostReducer(state)
});

export default connect(mapStateToProps)(ConnectedCreatePost);
