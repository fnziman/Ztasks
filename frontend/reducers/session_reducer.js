import { RECEIVE_CURRENT_USER,
         RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const nullUser = {
  currentUser: null,
  errors: [],
};

const sessionReducer = ( state = nullUser, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge( {}, state, { currentUser: action.currentUser });
    case RECEIVE_ERRORS:
      return Object.assign({}, state, { errors: action.errors });
    default:
      return state;
  }
};

export default sessionReducer;
