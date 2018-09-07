import { takeLatest, all } from 'redux-saga/effects';
import es6promise from 'es6-promise';
import { PostType } from 'reducer/post.reducer';
import { CreatePostTypes } from 'reducer/createPost.reducer';
import { PostDetailTypes } from 'reducer/postDetail.reducer';
import * as api from 'api/index';
import * as postSaga from './post.saga';
es6promise.polyfill();

export default function* root() {
  yield all([
    takeLatest(PostType.REQUEST_ENTIRE_POSTS, postSaga.requestEntirePosts, api),
    takeLatest(PostType.REQUEST_REMOVE_POST, postSaga.requestRemovePost, api),
    takeLatest(
      CreatePostTypes.REQUEST_CREATE_POST,
      postSaga.requestCreatePost,
      api
    ),
    takeLatest(
      PostDetailTypes.REQUEST_POST_DETAIL,
      postSaga.requestPostDetails,
      api
    )
  ]);
}
