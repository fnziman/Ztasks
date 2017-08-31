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
import * as Selector from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  const allIncompleteTasks = Selector.TasksAsArray(state).filter(task => {
    return(!task.completed);
  });

  return {
    currentList: state.currentList,
    ui: state.ui,
    lists: Selector.ListsAsArray(state),
    currentUser: state.session.currentUser,
    allTasks: allIncompleteTasks,
    todayTasks: Selector.todayTasks(allIncompleteTasks),
    tomorrowTasks: Selector.tomorrowTasks(allIncompleteTasks),
    thisWeekTasks: Selector.thisWeekTasks(allIncompleteTasks),
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListIndex));
