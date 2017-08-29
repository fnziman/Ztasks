import React from 'react';
import HeaderContainer from '../header/header_container';
import Sidebar from '../sidebar/sidebar';
import ListForm from '../lists/list_form';
import ListEditForm from '../lists/list_edit_form';
import AllTasksContainer from '../tasks/all_tasks_container';
import TodayTasksContainer from '../tasks/today_tasks_container';
import TomorrowTasksContainer from '../tasks/tomorrow_tasks_container';
import ListTasksContainer from '../tasks/list_tasks_container';
import { Route, Switch } from 'react-router-dom';

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { nextProps: {}};
    this.form = this.form.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout() {
    this.props.logout(this.props.currentUser);
    this.props.clearUi();
  }

  form() {
    switch (this.props.ui) {
      case "create":
        return <ListForm className="list-form"
          createList={this.props.createList}
          clearUi={this.props.clearUi}
          currentUser={this.props.currentUser} />;
      case "edit":
        return <ListEditForm className="list-edit-form"
          currentList={this.props.currentList}
          clearCurrentList={this.props.clearCurrentList}
          clearUi={this.props.clearUi}
          editList={this.props.editList} />;
      default:
        return null;
    }
  }

  render() {
    return(
      <container className="main-page">
        <container className="header-container">
          <HeaderContainer />
        </container>
        <container className="main-container">
          <Sidebar />
          {this.form()}
          <Switch>
            <Route path="/app/all" component={AllTasksContainer} />
            <Route path="/app/today" component={TodayTasksContainer} />
            <Route path="/app/tomorrow" component={TomorrowTasksContainer} />
            <Route path="/app/list/:listId" component={ListTasksContainer} />
          </Switch>
          <container className={this.props.ui === "settings" ? "settings-dropdown view" : "hidden"}>
            <div className="user">
              <p className="avatar">avatar</p>
              <div className="user-info">
                <p className="name">{this.props.currentUser.first_name} {this.props.currentUser.last_name}</p>
                <p className="email">{this.props.currentUser.email}</p>
              </div>
            </div>
            <p className="signout" onClick={this.handleLogout} >Sign out</p>
          </container>
        </container>
      </container>
    );
  }
}

export default MainPage;
