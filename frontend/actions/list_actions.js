import * as APIUtil from '../util/lists_util';

export const RECEIVE_LISTS = "RECEIVE_LISTS";
export const RECEIVE_SINGLE_LIST = "RECEIVE_SINGLE_LIST";
export const REMOVE_LIST = "REMOVE_LIST";
export const UPDATE_LIST = "UPDATE_LIST";

export const receiveLists = lists => {
  return {
    type: RECEIVE_LISTS,
    lists,
  };
};
export const receiveSingleList = list => {
  return {
    type: RECEIVE_SINGLE_LIST,
    list
  };
};
export const updateList = list => {
  return {
    type: UPDATE_LIST,
    list
  };
};
export const removeList = list => {
  return {
    type: REMOVE_LIST,
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
      list => (dispatch(receiveSingleList(list)))
    );
};
export const editList = (listId) => dispatch => {
  return APIUtil.editList(listId)
    .then(() => dispatch(updateList(listId)));
};
export const deleteList = (listId) => dispatch => {
  return APIUtil.deleteList(listId)
    .then(() => dispatch(removeList(listId)));
};
