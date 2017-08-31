import React from 'react';
import { Link } from 'react-router-dom';

class TasksIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.toggleCompleted = this.toggleCompleted.bind(this);
  }
  toggleCompleted() {
    this.props.editTask({
      id: this.props.task.id,
      completed: !this.props.task.completed
    });
  }

  render() {
    return (
      <container className="task">
        <div>
          <div onClick={this.toggleCompleted} className="checkbox"></div>
        </div>
        <div>
          <Link to={`${this.props.url}/${this.props.task.id}`}>
            <div className="task-link">{this.props.task.title}</div>
          </Link>
        </div>
      </container>
    );
  }
}

export default TasksIndexItem;