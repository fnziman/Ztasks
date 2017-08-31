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
import { ListsAsArray, TasksAsArray } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  const allTasks = TasksAsArray(state);

  let allIncompleteTasks = [];
  allTasks.forEach (task => {
    if (!task.completed) {
      allIncompleteTasks.push(task);
    }
  });

  const todayTasks = (tasks) => {
    let result = [];
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();
    if (month < 10) {
      month = '0' + (month + 1);
    }
    let date = currentDate.getDate();
    if (date < 10) {
      date = '0' + (date + 1);
    }
    let today = year + "-" + month + "-" + date;
    result = tasks.filter(task => {
      return (task.due_date === today);
    });
    return result;
  };
  const tomorrowTasks = (tasks) => {
    let result = [];
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1); //set to tomorrow
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();
    if (month < 10) {
      month = '0' + (month + 1);
    }
    let date = currentDate.getDate();
    if (date < 10) {
      date = '0' + (date + 1);
    }
    let tomorrow = year + "-" + month + "-" + date;
    result = tasks.filter(task => {
      return (task.due_date === tomorrow);
    });
    return result;
  };
  const thisWeekTasks = (tasks) => {
    let result = [];
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 6); //set to tomorrow
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();
    if (month < 10) {
      month = '0' + (month + 1);
    }
    let date = currentDate.getDate();
    if (date < 10) {
      date = '0' + (date + 1);
    }
    let thisWeek = year + "-" + month + "-" + date;
    result = tasks.filter(task => {
      return (task.due_date <= thisWeek);
    });
    return result;
  };



  return {
    currentList: state.currentList,
    ui: state.ui,
    lists: ListsAsArray(state),
    currentUser: state.session.currentUser,
    allTasks: allIncompleteTasks,
    todayTasks: todayTasks(allIncompleteTasks),
    tomorrowTasks: tomorrowTasks(allIncompleteTasks),
    thisWeekTasks: thisWeekTasks(allIncompleteTasks),
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
