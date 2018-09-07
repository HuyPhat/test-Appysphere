import axios from 'axios';

axios.defaults.baseURL = 'https://reduxblog.herokuapp.com/';

// reduxblog.herokuapp.com/api/posts?key=123
// http://reduxblog.herokuapp.com/api/posts
// title, categories and content
export const getEntirePosts = () => axios.get('/api/posts?key=123');
export const getPostDetails = id => axios.get(`/api/posts/${id}?key=123`);
export const createPost = ({ title, categories, content }) =>
  axios.post('/api/posts?key=123', {
    title,
    categories,
    content
  });
export const removePost = id => axios.delete(`/api/posts/${id}`);
