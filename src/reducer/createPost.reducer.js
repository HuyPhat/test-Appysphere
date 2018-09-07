import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  requestCreatePost: ['postDetails'],
  requestCreatePostSuccess: [],
  requestCreatePostFailure: ['error'],
  requestDone: []
});

/* export */
export const CreatePostTypes = Types;
export default Creators;

/* INITIAL STATE */
const DEFAULT_STATE = Immutable({
  requestStatus: 'idle',
  error: null,
  created: false
});

/* REDUCERS to handle create post */
const requestCreatePost = (state, action) => {
  return Immutable.merge(state, { ...DEFAULT_STATE, requestStatus: 'loading' });
};
const requestCreatePostSuccess = (state, action) => {
  console.log('requestCreatePostSuccess');
  return Immutable.merge(state, { requestStatus: 'loaded', created: true });
};
const requestCreatePostFailure = (state, action) => {
  console.log('requestCreatePostFailure');
  return Immutable.merge(state, {
    requestStatus: 'loaded',
    created: false,
    error: action.error
  });
};
const requestDone = (state, action) => {
  return Immutable.set(state, 'requestStatus', 'loaded');
};

/* Hookup Reducers To Types */
export const reducer = createReducer(DEFAULT_STATE, {
  [Types.REQUEST_CREATE_POST]: requestCreatePost,
  [Types.REQUEST_CREATE_POST_SUCCESS]: requestCreatePostSuccess,
  [Types.REQUEST_CREATE_POST_FAILURE]: requestCreatePostFailure,
  [Types.REQUEST_DONE]: requestDone
});
