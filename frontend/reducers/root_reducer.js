import { combineReducers } from 'redux';
import ListsReducer from './lists_reducer';
import SessionReducer from './session_reducer';

const rootReducer = combineReducers({
  lists: ListsReducer,
  session: SessionReducer,
});

export default rootReducer;
