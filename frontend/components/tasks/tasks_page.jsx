import React from 'react';
import ListIndexContainer from '../lists/list_index_container';

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
        <button onClick={this.handleLogout}>Logout</button>
        <ListIndexContainer />
      </div>
    );
  }
}

export default TasksPage;
