import { connect } from 'react-redux';
import ListIndex from './list_index';
import { fetchLists,
         createForm,
         createList,
         editForm,
         editList,
         clearUi,
         deleteList } from '../../actions/list_actions';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = state => {
  return {
    lists: asArray(state),
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps =  dispatch => {
  return {
    fetchLists: () => dispatch(fetchLists()),
    createForm: () => dispatch(createForm()),
    createList: list => dispatch(createList(list)),
    editForm: () => dispatch(editForm()),
    editList: listId => dispatch(editList(listId)),
    deleteList: listId => dispatch(deleteList(listId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);
