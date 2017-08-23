import { RECEIVE_LISTS,
         RECEIVE_LIST } from '../actions/list_actions';
import merge from 'lodash/merge';

const listsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LISTS:
      return merge( {}, state, action.lists);
    case RECEIVE_LIST:
      return merge( {}, state, action.list);
    default:
      return state;
  }
};

export default listsReducer;
