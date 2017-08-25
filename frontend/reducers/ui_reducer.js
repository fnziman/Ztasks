import { CHANGE_UI } from '../actions/list_actions';

const uiReducer = (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case CHANGE_UI:
      return action.change;
    default:
      return state;
  }
};

export default uiReducer;
