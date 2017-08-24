import React from 'react';
import HeaderContainer from '../header/header_container';
import Sidebar from '../sidebar/sidebar';

class TasksPage extends React.Component {
  render() {
    return(
      <div className="tasks-page">
        <HeaderContainer />
        <Sidebar />
      </div>
    );
  }
}

export default TasksPage;
