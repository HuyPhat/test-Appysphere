import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  requestEntirePosts: [],
  requestEntirePostsSuccess: ['posts'],
  requestEntirePostsFailure: ['error'],
  requestRemovePost: ['id'],
  requestRemovePostSuccess: ['id'],
  requestRemovePostFailure: ['error']
});

/* export */
export const PostType = Types;
export default Creators;

/* INITIAL STATE */
const DEFAULT_STATE = Immutable({
  requestStatus: 'idle',
  error: null,
  data: [],
  removing: 'idle'
});

/* REDUCERS to handle fetch entire posts */
const requestEntirePosts = (state, action) => {
  return Immutable.merge(state, { requestStatus: 'loading' });
};
const requestEntirePostsSuccess = (state, action) => {
  return Immutable.merge(state, {
    requestStatus: 'loaded',
    data: action.posts
  });
};
const requestEntirePostsFailure = (state, action) => {
  return Immutable.merge(state, {
    requestStatus: 'loaded',
    error: action.error
  });
};

/* Reducers to handle remove post */
const requestRemovePost = (state, action) => {
  return Immutable.set(state, 'removing', 'loading');
};

const requestRemovePostSuccess = (state, action) => {
  const posts = state.data.filter(post => post.id !== action.id);
  Immutable.set(state, 'removing', 'loaded');
  return Immutable.set(state, 'data', posts);
};

const requestRemovePostFailure = (state, action) => {
  return Immutable.set(state, 'removing', 'loaded');
};

/* Hookup Reducers To Types */
export const reducer = createReducer(DEFAULT_STATE, {
  [Types.REQUEST_ENTIRE_POSTS]: requestEntirePosts,
  [Types.REQUEST_ENTIRE_POSTS_SUCCESS]: requestEntirePostsSuccess,
  [Types.REQUEST_ENTIRE_POSTS_FAILURE]: requestEntirePostsFailure,
  [Types.REQUEST_REMOVE_POST]: requestRemovePost,
  [Types.REQUEST_REMOVE_POST_SUCCESS]: requestRemovePostSuccess,
  [Types.REQUEST_REMOVE_POST_FAILURE]: requestRemovePostFailure
});
