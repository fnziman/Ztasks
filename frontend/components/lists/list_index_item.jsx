import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class ListIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  close() {
    this.props.clearUi();
  }
  open() {
    console.log("opening", this.props.list)
    this.props.setCurrentList(this.props.list);
    this.props.listsDropDown();
  }


  render() {
    console.log(this.props.list)
    return (
      <Link to={`/app/list/${this.props.list.id}`} className="list-index-item">
        <span className="list-title">{this.props.list.title}</span>
        <span className="num-tasks">
          {this.props.allTasks.filter(task => task.list_id === this.props.list.id).length}
        </span>

        <i onClick={this.open} className="arrow list-arrow">arrow_drop_down</i>
      </Link>
    );
  }
}

export default withRouter(ListIndexItem);
