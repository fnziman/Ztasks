import { combineReducers } from 'redux';
import ListsReducer from './lists_reducer';
import SessionReducer from './session_reducer';
import uiReducer from './ui_reducer';
import CurrentListReducer from './current_list_reducer';

const rootReducer = combineReducers({
  currentList: CurrentListReducer,
  lists: ListsReducer,
  session: SessionReducer,
  ui: uiReducer,
});

export default rootReducer;
