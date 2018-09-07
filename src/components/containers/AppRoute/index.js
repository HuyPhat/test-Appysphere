import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from 'components/pages/Home';
import AppLayout from 'components/presentations/AppLayout';
import CreatePostPage from 'components/pages/CreatePost';
import PostDetailPage from 'components/pages/PostDetail';

class AppRoute extends React.Component {
  render() {
    return (
      <Router>
        <AppLayout>
          <Route exact path="/" component={HomePage} />
          <Route path="/create" component={CreatePostPage} />
          <Route path="/post/:id" component={PostDetailPage} />
        </AppLayout>
      </Router>
    );
  }
}

export default AppRoute;
