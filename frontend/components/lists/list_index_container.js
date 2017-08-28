import { connect } from 'react-redux';
import ListIndex from './list_index';
import { fetchLists,
         createForm,
         createList,
         currentList,
         setCurrentList,
         editForm,
         editList,
         listsDropDown,
         clearUi,
         clearCurrentList,
         deleteList } from '../../actions/list_actions';
import { ListsAsArray } from '../../reducers/selectors';

const mapStateToProps = state => {
  return {
    currentList: state.currentList,
    ui: state.ui,
    lists: ListsAsArray(state),
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps =  dispatch => {
  return {
    fetchLists: () => dispatch(fetchLists()),
    createForm: () => dispatch(createForm()),
    createList: list => dispatch(createList(list)),
    setCurrentList: listId => dispatch(setCurrentList(listId)),
    editForm: () => dispatch(editForm()),
    editList: listId => dispatch(editList(listId)),
    listsDropDown: () => dispatch(listsDropDown()),
    clearUi: () => dispatch(clearUi()),
    clearCurrentList: () => dispatch(clearCurrentList()),
    deleteList: listId => dispatch(deleteList(listId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);
