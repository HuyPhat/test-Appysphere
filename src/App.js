import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Button from '@material-ui/core/Button';
import { Provider } from 'react-redux';
import AppRoute from 'components/containers/AppRoute';
import configureStore from './store';
//
const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRoute />
      </Provider>
    );
  }
}

export default App;
