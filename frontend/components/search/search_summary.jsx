import React from 'react';
import * as Selector from '../../reducers/selectors';

class SearchSummary extends React.Component {

  render() {
    let totalTasks = this.props.incomplete;
    let dueToday = Selector.todayTasks(this.props.incomplete);
    let dueTomorrow = Selector.tomorrowTasks(this.props.incomplete);
    let completed = this.props.complete;

    return (
      <div className="list-summary">
        <h1>Search</h1>
        <div className="summary-items">
          <div className="summary-item total">
            {totalTasks.length}
            <p>tasks</p>
          </div>
          <div className="summary-item today">
            {dueToday.length}
            <p>due today</p>
          </div>
          <div className="summary-item tomorrow">
            {dueTomorrow.length}
            <p>due tomorrow</p>
          </div>
          <div className="summary-item completed">
            {completed.length}
            <p>completed</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchSummary;
