import { call, put } from 'redux-saga/effects';
import PostActions from 'reducer/post.reducer';
import CreatePostActions from 'reducer/createPost.reducer';
import PostDetailActions from 'reducer/postDetail.reducer';

export function* requestEntirePosts(api, action) {
  try {
    const response = yield call(api.getEntirePosts);
    if (response.status === 200) {
      yield put(PostActions.requestEntirePostsSuccess(response.data));
    } else {
      yield put(PostActions.requestEntirePostsFailure(response.error));
    }
  } catch (e) {
    yield put(PostActions.requestEntirePostsFailure(e));
  } finally {
    console.log('saga -> fetch posts');
  }
}

export function* requestRemovePost(api, action) {
  try {
    const response = yield call(api.removePost, action.id);
    console.log(response);
    if (response.status === 200) {
      yield put(PostActions.requestRemovePostSuccess(response.data.id));
    } else {
      yield put(PostActions.requestRemovePostFailure(response.error));
      yield put(PostActions.requestEntirePosts());
    }
  } catch (e) {
    console.log(e);
    yield put(PostActions.requestRemovePostFailure(e));
    yield put(PostActions.requestEntirePosts());
  } finally {
    console.log('saga -> remove posts');
  }
}

export function* requestCreatePost(api, action) {
  try {
    console.log('post details: ', action);
    const response = yield call(api.createPost, action.postDetails);
    console.log('create post response: ', response);
    if (response.statusText === 'Created') {
      yield put(CreatePostActions.requestCreatePostSuccess(response.data.id));
    } else {
      yield put(CreatePostActions.requestCreatePostFailure(response.error));
    }
  } catch (error) {
    yield put(CreatePostActions.requestCreatePostFailure(error));
  } finally {
    console.log('saga -> create posts');
  }
}

export function* requestPostDetails(api, action) {
  try {
    const response = yield call(api.getPostDetails, action.id);
    console.log(response);
    if (response.status === 200) {
      yield put(PostDetailActions.requestPostDetailSuccess(response.data));
    } else {
      yield put(PostDetailActions.requestPostDetailFailure(response.error));
    }
  } catch (error) {
    yield put(PostDetailActions.requestPostDetailFailure(error));
  } finally {
    console.log('saga -> post detail');
  }
}
