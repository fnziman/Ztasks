import React from 'react';
import { withRouter } from 'react-router-dom';

class TaskDetail extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   id: this.props.currentTask.id,
    //   title: this.props.currentTask.title,
    //   dueDate: this.props.currentTask.due_date,
    //   listId: this.props.currentTask.list_id,
    // };
    this.lists = this.lists.bind(this);
  }
  componentDidMount() {
    this.props.setCurrentTask(this.props.taskId);
  }
  lists() {
    this.props.lists.map(list => {
      return (
        <option value={`${list.id}`}>
          `${list.title}`
        </option>
      );
    });
  }

  render() {
    return (
      <container className="task-detail-container">
          <span className="close">close &times;</span>
        <form>
          <input className="title" type="text" />
          <label className="date">due
            <input type="date" />
          </label>
          <label className="list">list
              <select>
                {this.lists()}
              </select>
          </label>
        </form>
      </container>
    );
  }
}

export default withRouter(TaskDetail);
