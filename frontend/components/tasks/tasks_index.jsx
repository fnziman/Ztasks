import React from 'react';
import TaskIndexItem from './task_index_item';
import { Link, withRouter } from 'react-router-dom';

class TasksIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Add a task...',
      dueDate: this.props.dueDate,
      showing: "incomplete"
    };

    this.showComplete = this.showComplete.bind(this);
    this.showIncomplete = this.showIncomplete.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchTasks();
  }
  showComplete() {
    this.setState({ showing: "complete"});
  }
  showIncomplete() {
    this.setState({ showing: "incomplete"});
  }
  updateInput(e) {
    this.setState({ title: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const task = {
      title: this.state.title,
      due_date: this.props.dueDate,
      list_id: this.props.listId
    };
    this.setState({ title: "Add a task..." });
    this.props.createTask(task);
  }

  render() {
    const incomplete = this.props.incomplete.map(task => {
      return (
        <TaskIndexItem
          key={task.id}
          task={task}
          editTask={this.props.editTask}
          url={this.props.match.url}
          completed={this.state.showing}
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
      <container className="tasks-index">
        <div className="tasks-choice">
          <span onClick={this.showIncomplete}
            className={this.state.showing === "incomplete" ? "showing" : ""}>Incomplete</span>
          <span onClick={this.showComplete}
            className={this.state.showing === "complete" ? "showing" : ""}>Completed</span>
        </div>
        <div className="add-task">
          <form>
          <input className="add-task-input" type="text" onChange={this.updateInput} value={this.state.title} />
            <br/>
            <div className="add-task-options">
              <input type="button" />
              <input className="add-task-button" type="submit" onClick={this.handleSubmit} defaultValue="Add Task" />
            </div>
          </form>
        </div>
        <div className={this.state.showing === "incomplete" ? "tasks view" : "hidden"}>
          {incomplete}
        </div>
        <div className={this.state.showing === "complete" ? "tasks view crossed-out" : "hidden"}>
          <ul>
            {complete}
          </ul>
        </div>

      </container>
    );
  }
}

export default withRouter(TasksIndex);
