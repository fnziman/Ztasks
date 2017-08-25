import React from 'react';
import ListEditForm from './list_edit_form';

class ListIndexItem extends React.Component {
  constructor(props) {
    super(props);

    // this.handleDelete = this.handleDelete.bind(this);
  }
  //
  // handleDelete() {
  //   this.props.delete(this.props.list.id);
  // }

  render() {
    return (
      <div className="list-index-item">
        <span className="list-title">{this.props.list.title}</span>
          <i className="arrow list-arrow">arrow_drop_down</i>
      </div>
    );
  }
}

export default ListIndexItem;
