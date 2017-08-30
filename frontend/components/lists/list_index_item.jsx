import React from 'react';
import { Link } from 'react-router-dom';
import ListEditForm from './list_edit_form';

class ListIndexItem extends React.Component {
  constructor(props) {
    super(props);


    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleDrop = this.toggleDrop.bind(this);
  }
  handleEdit() {
    this.props.editForm();
  }
  handleDelete() {
    this.props.deleteList(this.props.list.id);
    this.props.clearUi();
  }

  toggleDrop() {
    if (this.props.ui === "lists") {
      this.props.clearCurrentList();
      this.props.clearUi();
    } else {
      this.props.setCurrentList(this.props.list);
      this.props.listsDropDown();
    }
  }


  render() {
    return (
      <Link to={`/app/list/${this.props.list.id}`} className="list-index-item">
        <span className="list-title">{this.props.list.title}</span>
        <span className="num-tasks">{this.props.list.tasks.length}</span>
        <i onClick={this.toggleDrop} className="arrow list-arrow">arrow_drop_down</i>
        <container
          className={(
            this.props.ui === "lists" && this.props.currentList.id === this.props.list.id
          ) ? "lists-dropdown view" : "lists-dropdown hidden"}>
          <p onClick={this.handleEdit}>Rename list</p>
          <p onClick={this.handleDelete}>Remove list</p>
        </container>
      </Link>
    );
  }
}

export default ListIndexItem;
