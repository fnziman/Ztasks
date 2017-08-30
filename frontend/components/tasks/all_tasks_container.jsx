import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TasksIndex from './tasks_index';
import { fetchTasks, createTask, editTask} from '../../actions/task_actions';
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
    currentTask: state.tasks[ownProps.match.params.taskId],
    listId: null,
    dueDate: null,
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
    editTask: task => dispatch(editTask(task)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TasksIndex));
