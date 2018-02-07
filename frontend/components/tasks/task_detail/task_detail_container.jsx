import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TaskDetail from './task_detail';
import { ListsAsArray } from '../../../reducers/selectors';
import { editTask, deleteTask } from '../../../actions/task_actions';

const mapStateToProps = (state, ownProps) => {
  const taskId = ownProps.match.params.taskId;
  const currentTask = state.tasks[taskId];
  return {
    currentTask: currentTask,
    taskId: taskId,
    lists: ListsAsArray(state),
    listId: currentTask.list_id,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editTask: (task) => dispatch(editTask(task)),
    deleteTask: (task) => dispatch(deleteTask(task)),
  };
};


export default(connect(mapStateToProps, mapDispatchToProps)(TaskDetail));
