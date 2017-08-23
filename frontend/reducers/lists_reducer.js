import { RECEIVE_LISTS } from '../actions/list_actions';
import merge from 'lodash/merge';

const listsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LISTS:
      return merge( {}, state, action.lists);
    default:
      return state;
  }
};

export default listsReducer;
