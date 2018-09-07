/* reducer index.js */
import { combineReducers } from 'redux';

export default combineReducers({
  post: require('./post.reducer').reducer,
  createPost: require('./createPost.reducer').reducer,
  postDetail: require('./postDetail.reducer').reducer
});
