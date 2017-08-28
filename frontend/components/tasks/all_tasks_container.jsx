import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Tasks from './tasks';
import { fetchTasks, createTask } from '../../actions/task_actions';
import { TasksAsArray } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const allTasks = TasksAsArray(state);
  let incomplete = [];
  let complete = [];
  allTasks.forEach (task => {
    if (task.completed) {
      complete.push(task);
    } else {
      incomplete.push(task);
    }
  });
  return {
    listId: Number(ownProps.match.params.listId),
    ui: state.ui,
    incomplete: incomplete,
    complete: complete,
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
