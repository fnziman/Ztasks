import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Tasks from './tasks';
import { fetchTasks, createTask } from '../../actions/task_actions';
import { TasksAsArray } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const allTasks = TasksAsArray(state);

  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth();
  if (month < 10) {
    month = '0' + (month + 1);
  }
  let date = currentDate.getDate();
  let formattedDate = year + "-" + month + "-" + date;
  const listTasks = allTasks.filter(task => {
    return (task.due_date === formattedDate);
  });
  let complete = [];
  let incomplete = [];
  listTasks.forEach (task => {
    if (task.completed) {
      complete.push(task);
    } else {
      incomplete.push(task);
    }
  });
  return {
    listId: null,
    dueDate: formattedDate,
    complete: complete,
    incomplete: incomplete,
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps =  dispatch => {
  return {
    fetchTasks: () => dispatch(fetchTasks()),
    createTask: task => dispatch(createTask(task)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Tasks));
