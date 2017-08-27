import React from 'react';
import ListIndexItem from './list_index_item';

class ListIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showLists: true };
    this.toggleLists = this.toggleLists.bind(this);
  }

  componentDidMount() {
    this.props.fetchLists();
  }
  toggleLists() {
    if (this.state.showLists) {
      this.setState({ showLists: false });
    } else {
      this.setState({ showLists: true });
    }
  }

  render() {
    const lists = this.props.lists.map(list => {
      return (
        <ListIndexItem
          key={list.id}
          list={list}
          ui={this.props.ui}
          currentList={this.props.currentList}
          setCurrentList={this.props.setCurrentList}
          editForm={this.props.editForm}
          editList={this.props.editList}
          listsDropDown={this.props.listsDropDown}
          clearUi={this.props.clearUi}
          clearCurrentList={this.props.clearCurrentList}
          deleteList={this.props.deleteList} />
      );
    });

    return (
      <container className="list-index-container" >
        <div className="lists-index">
          <div onClick={this.toggleLists} className="list-header">
            <i className="arrow">arrow_drop_down</i>

            <h1>Lists</h1>
            <i onClick={this.props.createForm} className="add-list">add</i>
          </div>
          <container className={this.state.showLists ? "view" : "hidden"}>
            {lists}
          </container>
        </div>
      </container>
    );
  }
}

export default ListIndex;
