import { combineReducers } from 'redux';
import TasksReducer from './tasks_reducer';
import ListsReducer from './lists_reducer';
import SessionReducer from './session_reducer';
import uiReducer from './ui_reducer';
// import CurrentListReducer from './current_list_reducer';
// import CurrentTaskReducer from './current_task_reducer';

const rootReducer = combineReducers({
  // currentList: CurrentListReducer,
  // currentTask: CurrentTaskReducer,
  tasks: TasksReducer,
  lists: ListsReducer,
  session: SessionReducer,
  ui: uiReducer,
});

export default rootReducer;
