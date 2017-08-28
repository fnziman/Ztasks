import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AllTasks from './all_tasks';
import { fetchTasks,
         createTask,
         editTask,
         deleteTask
       } from '../../actions/task_actions';
import { TasksAsArray, ListTasks } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    listId: ownProps.match.params.listId,
    ui: state.ui,
    tasks: TasksAsArray(state),
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps =  dispatch => {
  return {
    fetchTasks: () => dispatch(fetchTasks()),
    createTask: task => dispatch(createTask(task)),
    editTask: taskId => dispatch(editTask(taskId)),
    deleteTask: taskId => dispatch(deleteTask(taskId)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllTasks));
