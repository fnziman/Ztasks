import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import ListEditForm from './list_edit_form';

class ListIndexItem extends React.Component {
  constructor(props) {
    super(props);


    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
  handleEdit() {
    this.props.editForm();
  }
  handleDelete() {
    this.props.deleteList(this.props.list.id);
    this.props.clearUi();
  }
  close() {
    this.props.clearUi();
  }
  open() {
    // this.props.setCurrentList(this.props.list);
    this.props.listsDropDown();
  }


  render() {
    return (
      <Link to={`/app/list/${this.props.list.id}`} className="list-index-item">
        <span className="list-title">{this.props.list.title}</span>
        <span className="num-tasks">
          {this.props.allTasks.filter(task => task.list_id === this.props.list.id).length}
        </span>
          <container
            className={
              (this.props.ui === "lists" && Number(this.props.location.pathname.slice(-1)[0])
 === this.props.list.id)
              ? "drop-container view" : "hidden"}>
            <span onClick={this.close} className="form-background"></span>
            <div className="lists-dropdown">
              <p onClick={this.handleEdit}>Rename list</p>
              <Link to="/app/all">
                <p onClick={this.handleDelete}>Remove list</p>
              </Link>
            </div>
          </container>
        <i onClick={this.open} className="arrow list-arrow">arrow_drop_down</i>
      </Link>
    );
  }
}

export default withRouter(ListIndexItem);
