import React from 'react';

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      title: 'Add a task...',
      list_id: this.props.listId,
      showing: "incomplete"
    };

    this.showComplete = this.showComplete.bind(this);
    this.showIncomplete = this.showIncomplete.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.incomplete = this.incomplete.bind(this);
    this.complete = this.complete.bind(this);
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
    const task = { title: this.state.title, list_id: this.state.list_id };
    this.setState({ title: "Add a task..." });
    this.props.createTask(task);
  }
  incomplete() {
    return this.props.incomplete.map(task => {
      return (
        <li key={task.id} className="task">
          <div className="checkbox"></div>
          <div>{task.title}</div>
        </li>
      );
    });
  }
  complete() {
    return this.props.complete.map(task => {
      return (
        <li key={task.id} className="task">
          <div className="checkbox"></div>
          <div>{task.title}</div>
        </li>
      );
    });
  }



  render() {
    return (
      <container className="tasks-index">
        <div className="tasks-choice">
          <span onClick={this.showIncomplete}>Incomplete</span>
          <span onClick={this.showComplete}>Completed</span>
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
          <ul>
            {this.incomplete()}
          </ul>
        </div>
        <div className={this.state.showing === "complete" ? "tasks view" : "hidden"}>
          <ul>
            {this.complete()}
          </ul>
        </div>
      </container>
    );
  }
}

export default Tasks;
