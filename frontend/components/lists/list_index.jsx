import React from 'react';
import ListIndexItem from './list_index_item';

class ListIndex extends React.Component {
  componentDidMount() {
    this.props.fetchLists();
  }
  componentWillReceiveProps(nextProps) { //rigged this....
    if (this.props.lists.length !== nextProps.lists.length) {
      this.props.fetchLists();
    }
  }

  render() {
    const lists = this.props.lists.map(list => {
      return <ListIndexItem key={list.id} title={list.title} />;
    });

    return (
      <div className="lists-index">
        <h1>Lists</h1>
        {lists}
      </div>
    );
  }
}

export default ListIndex;
