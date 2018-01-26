import { combineReducers } from 'redux';
import TasksReducer from './tasks_reducer';
import ListsReducer from './lists_reducer';
import SessionReducer from './session_reducer';


const rootReducer = combineReducers({
  tasks: TasksReducer,
  lists: ListsReducer,
  session: SessionReducer,
});

export default rootReducer;
