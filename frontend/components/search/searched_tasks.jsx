import React from 'react';
import TaskIndexItem from '../tasks/task_index_item';
import { Link, withRouter } from 'react-router-dom';

class SearchedTasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  componentDidMount() {
    this.props.fetchTasks();
  }
  updateInput(e) {
    this.setState({ title: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const task = {
      title: this.state.title,
      user_id: this.props.currentUser.id,
    };
    this.setState({ title: "" });
    if (task.title !== '') {
      this.props.createTask(task);
    }
  }
  toggleStatusList() {
    const incompleteTab = document.getElementById('incomplete');
    const completeTab = document.getElementById('complete');
    const incompleteTasks = document.getElementById('incomplete-tasks');
    const completeTasks = document.getElementById('complete-tasks');
    if (incompleteTab.className === 'showing') {
      incompleteTab.className = '';
      completeTab.className = 'showing';
      incompleteTasks.style.display = 'none';
      completeTasks.style.display = 'block';
    } else {
      completeTab.className = '';
      incompleteTab.className = 'showing';
      completeTasks.style.display = 'none';
      incompleteTasks.style.display = 'block';
    }
  }

  render() {
    const incomplete = this.props.incomplete.map(task => {
      return (
        <TaskIndexItem
          key={task.id}
          task={task}
          editTask={this.props.editTask}
          url={this.props.match.url}
          />
      );
    });
    const complete = this.props.complete.map(task => {
        return (
          <TaskIndexItem
            key={task.id}
            task={task}
            editTask={this.props.editTask}
            url={this.props.match.url}
            />
        );
      });

    return (
      <div className="tasks-index">
        <div className="tasks-choice">
          <span id="incomplete" className="showing" onClick={this.toggleStatusList}>Incomplete</span>
          <span id="complete" onClick={this.toggleStatusList}>Completed</span>
        </div>
        <div className="add-task">
          <form onSubmit={this.handleSubmit}>
          <input className="add-task-input" type="text" onChange={this.updateInput}
            placeholder="Add a task..." value={this.state.title} />
            <br/>
            <div className="add-task-options">
              <input type="button" />
              <input className="add-task-button" type="submit" defaultValue="Add Task" />
            </div>
          </form>
        </div>
        <div id="incomplete-tasks" className="tasks">
          {incomplete}
        </div>
        <div id="complete-tasks" className="tasks crossed-out">
          <ul>
            {complete}
          </ul>
        </div>

      </div>
    );
  }
}

export default withRouter(SearchedTasks);
