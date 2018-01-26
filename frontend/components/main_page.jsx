import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HeaderContainer from './header/header_container';
import Sidebar from './sidebar/sidebar';
import ListFormContainer from './lists/list_form_container';
import ListEditFormContainer from './lists/list_edit_form_container';
import AllTasksContainer from './tasks/all_tasks_container';
import TodayTasksContainer from './tasks/today_tasks_container';
import TomorrowTasksContainer from './tasks/tomorrow_tasks_container';
import ThisWeekTasksContainer from './tasks/this_week_tasks_container';
import ListTasksContainer from './tasks/list_tasks_container';
import TaskDetailContainer from './tasks/task_detail/task_detail_container';
import ListSummaryContainer from './lists/list_summary_container';
import SearchedTasksContainer from './search/searched_tasks_container';
import SearchSummaryContainer from './search/search_summary_container';
import ProfileContainer from './profile/profile_container';
import SettingsContainer from './settings/settings_container';

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { nextProps: {}}; // TODO: what was I doing here?
  }

  render() {
    return(
      <div className="main-page">
        <div className="header-container">
          <HeaderContainer />
        </div>
        <div className="main-container">
          <Sidebar />
          <SettingsContainer />
          <ProfileContainer />
          <ListFormContainer />

          <div className="secondary-container">
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
              <Route path="/app/list/:listId/edit" component={ListEditFormContainer} />
              <Route path="/app/list/:listId/:taskId" component={TaskDetailContainer} />
            </Switch>

          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
