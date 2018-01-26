import React from 'react';
import ListIndexContainer from '../lists/list_index_container';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div id="sidebar">
      <Link to="/app/all" className="logo">
        <p>Ztasks</p>
      </Link>
      <ListIndexContainer />
    </div>
  );
};

export default Sidebar;
