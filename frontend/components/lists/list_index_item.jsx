import React from 'react';

class ListIndexItem extends React.Component {

  render() {
    return (
      <div className="list-title">{this.props.title}</div>
    );
  }
}

export default ListIndexItem;
