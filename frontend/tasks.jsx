import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
// testing
import * as APIUtil from './util/lists_util';
import { fetchLists } from './actions/list_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  //TEST
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // window.createList = APIUtil.createList;
  // window.fetchList = APIUtil.fetchList;
  window.fetchLists = fetchLists;
  // window.deleteList = APIUtil.deleteList;
  //TEST END

  ReactDOM.render(<Root store={store} />, root);
});
