import React from 'react';

class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      title: 'Add a task...',
      // list_id: this.params.match???
      //need to remove requirement on due_date
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
    this.setState({ newTask: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const task = { title: this.state.title, list_id: this.state.list_id };
    this.setState({ title: "Add a task..." });
    this.props.createTask(task);
  }

  render() {
    const complete = this.props.tasks.map(task => {
      if (task.complete) {
        return task.title;
      }
    });
    const incomplete = this.props.tasks.map(task => {
      if (!task.complete) {
        return task.title;
      }
    });
    
    return (
      <container className="tasks-index">
        <div className="tasks-choice">
          <span onClick={this.showIncomplete}>Incomplete</span>
          <span onClick={this.showComplete}>Completed</span>
        </div>
        <div className="add-task">
          <form>
            <input type="text" onChange={this.updateInput} value={this.state.newTask} />
            <input type="submit" onClick={this.handleSubmit} defaultValue="Add Task" />
          </form>
        </div>
        <div className={this.state.showing === "incomplete" ? "incomplete-tasks view" : "incomplete-tasks hidden"}>
          {incomplete}
        </div>
        <div className={this.state.showing === "complete" ? "complete-tasks view" : "complete-tasks hidden"}>
          {complete}
        </div>
      </container>
    );
  }
}

export default TaskIndex;
