import * as APIUtil from '../util/tasks_util';

export const RECEIVE_TASKS = "RECEIVE_TASKS";
export const RECEIVE_SINGLE_TASK = "RECEIVE_SINGLE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const RECEIVE_CURRENT_TASK = "RECEIVE_CURRENT_TASK";

export const receiveTasks = tasks => {
  return {
    type: RECEIVE_TASKS,
    tasks,
  };
};
export const receiveSingleTask = task => {
  return {
    type: RECEIVE_SINGLE_TASK,
    task,
  };
};
export const updateTask = task => {
  return {
    type: UPDATE_TASK,
    task,
  };
};
export const removeTask = task => {
  return {
    type: REMOVE_TASK,
    task,
  };
};
export const receiveCurrentTask = currentTask => {
  return {
    type: RECEIVE_CURRENT_TASK,
    currentTask,
  };
};
////////////////////////////////////////////

export const fetchTasks = () => dispatch => {
  return APIUtil.fetchTasks()
    .then(
      tasks => (dispatch(receiveTasks(tasks)))
    );
};
export const fetchSingleTask = (taskId) => dispatch => {
  return APIUtil.fetchSingleTask(taskId)
    .then(
      task => (dispatch(receiveSingleTask(task)))
    );
};
export const createTask = (task) => dispatch => {
  return APIUtil.createTask(task)
    .then(
      task => (dispatch(receiveSingleTask(task)))
    );
};
export const editTask = (task) => dispatch => {
  return APIUtil.editTask(task)
    .then(
      task => (dispatch(updateTask(task)))
    );
};
export const deleteTask = (taskId) => dispatch => {
  return APIUtil.deleteTask(taskId)
    .then(
      () => (dispatch(removeTask(taskId)))
    );
};
export const setCurrentTask = taskId => dispatch => {
  return APIUtil.fetchSingleTask(taskId)
  .then(
    task => dispatch(receiveCurrentTask(task))
  )
};
