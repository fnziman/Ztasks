import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
// testing
import { fetchTasks,
         createTask,
         editTask,
         deleteTask
       } from './actions/task_actions';

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
  window.fetchTasks = fetchTasks;
  window.createTask = createTask;
  window.editTask = editTask;
  window.deleteTask = deleteTask;
  //TEST END

  ReactDOM.render(<Root store={store} />, root);
});
