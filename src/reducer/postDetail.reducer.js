import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  requestPostDetail: ['id'],
  requestPostDetailSuccess: ['detail'],
  requestPostDetailFailure: ['error']
});

/* export */
export const PostDetailTypes = Types;
export default Creators;

/* INITIAL STATE */
const DEFAULT_STATE = Immutable({
  requestStatus: 'idle',
  error: null,
  post: {}
});

/* REDUCERS to handle create post */
const requestPostDetail = (state, action) => {
  return Immutable.merge(state, { ...DEFAULT_STATE, requestStatus: 'loading' });
};

const requestPostDetailSuccess = (state, action) => {
  return Immutable.merge(state, {
    requestStatus: 'loaded',
    post: action.detail
  });
};

const requestPostDetailFailure = (state, action) => {
  return Immutable.merge(state, {
    requestStatus: 'loaded',
    error: action.error
  });
};

/* Hookup Reducers To Types */
export const reducer = createReducer(DEFAULT_STATE, {
  [Types.REQUEST_POST_DETAIL]: requestPostDetail,
  [Types.REQUEST_POST_DETAIL_SUCCESS]: requestPostDetailSuccess,
  [Types.REQUEST_POST_DETAIL_FAILURE]: requestPostDetailFailure
});
