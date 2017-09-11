import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HeaderContainer from '../header/header_container';
import Sidebar from '../sidebar/sidebar';
import ListForm from '../lists/list_form';
import ListEditForm from '../lists/list_edit_form';
import AllTasksContainer from '../tasks/all_tasks_container';
import TodayTasksContainer from '../tasks/today_tasks_container';
import TomorrowTasksContainer from '../tasks/tomorrow_tasks_container';
import ThisWeekTasksContainer from '../tasks/this_week_tasks_container';
import ListTasksContainer from '../tasks/list_tasks_container';
import TaskDetailContainer from '../tasks/task_detail/task_detail_container';
import ListSummaryContainer from '../lists/list_summary_container';
import SearchedTasksContainer from '../search/searched_tasks_container';
import SearchSummaryContainer from '../search/search_summary_container';
import Profile from '../profile/profile';

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { nextProps: {}};
    this.form = this.form.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.close = this.close.bind(this);
  }

  handleLogout() {
    this.props.logout(this.props.currentUser);
    this.props.clearUi();
  }
  close() {
    this.props.clearUi();
  }
  form() {
    switch (this.props.ui) {
      case "create":
        return <ListForm className="list-form"
          createList={this.props.createList}
          clearUi={this.close}
          currentUser={this.props.currentUser} />;
      case "edit":
        return <ListEditForm className="list-edit-form"
          currentList={this.props.currentList}
          clearCurrentList={this.props.clearCurrentList}
          clearUi={this.close}
          editList={this.props.editList} />;
      case "profile":
        return <Profile className="profile-form"
          currentUser={this.props.currentUser}
          clearUi={this.close}
          editProfile={this.props.editProfile} />;
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
          <container className="secondary-container">
            <Switch>
              <Route path="/app/all" component={AllTasksContainer} />
              <Route path="/app/today" component={TodayTasksContainer} />
              <Route path="/app/tomorrow" component={TomorrowTasksContainer} />
              <Route path="/app/this_week" component={ThisWeekTasksContainer} />
              <Route path="/app/list/:listId" component={ListTasksContainer} />
              <Route path="/search/:searchTerm" component={SearchedTasksContainer} />
            </Switch>

            <Switch>
              <Route exact path="/app/all" component={ListSummaryContainer} />
              <Route exact path="/app/today" component={ListSummaryContainer} />
              <Route exact path="/app/tomorrow" component={ListSummaryContainer} />
              <Route exact path="/app/this_week" component={ListSummaryContainer} />
              <Route exact path="/app/list/:listId" component={ListSummaryContainer} />
              <Route path="/search/:searchTerm" component={SearchSummaryContainer} />

              <Route path="/app/all/:taskId" component={TaskDetailContainer} />
              <Route path="/app/today/:taskId" component={TaskDetailContainer} />
              <Route path="/app/tomorrow/:taskId" component={TaskDetailContainer} />
              <Route path="/app/this_week/:taskId" component={TaskDetailContainer} />
              <Route path="/app/list/:listId/:taskId" component={TaskDetailContainer} />

            </Switch>

          </container>
          <div className={this.props.ui === "settings" ? "view drop-container" : "hidden"}>
            <span onClick={this.close} className="form-background"></span>

            <container className="settings-dropdown">
              <div onClick={this.props.profileForm} className="user">
                <div className="user-info">
                  <p className="name">{this.props.currentUser.first_name} {this.props.currentUser.last_name}</p>
                  <p className="email">{this.props.currentUser.email}</p>
                </div>
              </div>
              <p className="signout" onClick={this.handleLogout} >Sign out</p>
            </container>
          </div>
        </container>
      </container>
    );
  }
}

export default MainPage;
