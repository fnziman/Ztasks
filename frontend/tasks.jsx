import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  //TEST
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //TEST END

  ReactDOM.render(<h1>Welcome to Tasks</h1>, root);
});
