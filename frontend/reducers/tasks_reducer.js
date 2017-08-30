import { RECEIVE_TASKS,
         RECEIVE_SINGLE_TASK,
         REMOVE_TASK,
         UPDATE_TASK,
         RECEIVE_CURRENT_TASK
       } from '../actions/task_actions';
import _ from 'lodash';

const tasksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TASKS:
      return action.tasks;
    case RECEIVE_SINGLE_TASK:
      return _.merge({}, state, { [action.task.id]: action.task });
    case UPDATE_TASK:
      return _.merge({}, state, { [action.task.id]: action.task });
    case REMOVE_TASK:
      return _.omit(state, [action.task]);
    default:
    return state;
  }
};

export default tasksReducer;
