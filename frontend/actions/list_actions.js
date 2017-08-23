import * as APIUtil from '../util/lists_util';

export const RECEIVE_LISTS = "RECEIVE_LISTS";
export const RECEIVE_LIST = "RECEIVE_LIST";

export const receiveLists = lists => {
  return {
    type: RECEIVE_LISTS,
    lists,
  };
};
export const receiveList = list => {
  return {
    type: RECEIVE_LIST,
    list
  };
};

export const fetchLists = () => dispatch => {
  return APIUtil.fetchLists()
    .then(
      lists => (dispatch(receiveLists(lists)))
    );
};
export const createList = (list) => dispatch => {
  return APIUtil.createList(list)
    .then(
      list => (dispatch(receiveList(list)))
    );
};
