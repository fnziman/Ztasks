import { connect } from 'react-redux';
import TaskIndex from './task_index';
import { fetchTasks,
         createTask,
         editTask,
         deleteTask
       } from '../../actions/task_actions';
import { TasksAsArray } from '../../reducers/selectors';

const mapStateToProps = state => {
  return {
    currentList: state.currentList,
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

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex);
