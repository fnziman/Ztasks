import React from 'react';
import ListEditForm from './list_edit_form';

class ListIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state={ dropdown: false };

    this.handleDelete = this.handleDelete.bind(this);
    this.toggleDrop = this.toggleDrop.bind(this);
  }

  handleDelete() {
    this.props.deleteList(this.props.list.id);
  }

  toggleDrop() {
    const next = !this.state.dropdown;
    this.setState({ dropdown: next });
  }


  render() {

    return (
      <div className="list-index-item">
        <span className="list-title">{this.props.list.title}</span>
        <i onClick={this.toggleDrop} className="arrow list-arrow">arrow_drop_down</i>
        <container className={this.state.dropdown ? "lists-dropdown view" : "lists-dropdown hidden"}>
          <p onClick={this.props.editForm}>Rename list</p>
          <p onClick={this.handleDelete}>Remove list</p>
        </container>
      </div>
    );
  }
}

export default ListIndexItem;
