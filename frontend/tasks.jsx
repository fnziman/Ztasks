import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
// testing
import { createForm, editForm, listsDropDown, settingsDropdown, clearUi } from './actions/list_actions';

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
  window.createForm = createForm;
  window.editForm = editForm;
  window.listsDropDown = listsDropDown;
  window.settingsDropdown = settingsDropdown;
  window.clearUi = clearUi;
  //TEST END

  ReactDOM.render(<Root store={store} />, root);
});
