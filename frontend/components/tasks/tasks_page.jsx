import React from 'react';

class TasksPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout() {
    this.props.logout(this.props.currentUser);
  }
  render() {
    return(
      <div>
        <h1>tasks_page</h1>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

export default TasksPage;
