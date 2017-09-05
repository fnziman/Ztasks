import { RECEIVE_LISTS,
         RECEIVE_SINGLE_LIST,
        //  UPDATE_LIST,
         REMOVE_LIST } from '../actions/list_actions';
import _ from 'lodash';

const listsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LISTS:
      return  action.lists;
    case RECEIVE_SINGLE_LIST:
      return _.merge({}, state, { [action.list.id]: action.list });
    // case UPDATE_LIST:
    //   return _.merge({}, state, { [action.list.id]: action.list });
    case REMOVE_LIST:
      return _.omit( state, [action.list.id] );
    default:
      return state;
  }
};

export default listsReducer;
