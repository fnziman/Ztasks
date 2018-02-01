import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class ListIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.open = this.open.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  open() {
    const listMenu = document.getElementById(`list-${this.props.list.id}`);
    listMenu.style.display = 'block';
  }
  close() {
    const listMenus = document.getElementsByClassName('list-menu');
    for (let i = 0; i < listMenus.length; i++) {
      listMenus[i].style.display = 'none';
    }
  }
  handleDelete() {
    this.props.deleteList(this.props.list.id);
  }

  render() {
    return (
      <div>
        <Link to={`/app/list/${this.props.list.id}`} className="list-index-item">
          <span className="list-title">{this.props.list.title}</span>
          <span className="num-tasks">
            {this.props.numTasks}
          </span>

          <i onClick={this.open} className="arrow list-arrow">arrow_drop_down</i>
        </Link>
          <div id={`list-${this.props.list.id}`} className="list-menu" >
            <span onClick={this.close} className="form-background"></span>
            <div className="lists-dropdown">
              <Link to={`/app/list/${this.props.list.id}/edit`} >
                <p onClick={this.close}>Rename list</p>
              </Link>
              <Link to="/app/all">
                <p onClick={this.handleDelete}>Remove list</p>
              </Link>
            </div>
          </div>
      </div>
    );
  }
}

export default withRouter(ListIndexItem);
