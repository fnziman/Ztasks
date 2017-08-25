import { combineReducers } from 'redux';
import ListsReducer from './lists_reducer';
import SessionReducer from './session_reducer';
import uiReducer from './ui_reducer';

const rootReducer = combineReducers({
  lists: ListsReducer,
  session: SessionReducer,
  ui: uiReducer,
});

export default rootReducer;
