import * as APIUtil from '../util/lists_util';

export const RECEIVE_LISTS = "RECEIVE_LISTS";

export const receiveLists = lists => {
  return {
    type: RECEIVE_LISTS,
    lists,
  };
};

export const fetchLists = () => dispatch => {
  return APIUtil.fetchLists()
    .then(
      lists => (dispatch(receiveLists(lists)))
    );
};
