import React from 'react';
import { Link } from 'react-router-dom';
// import header

class Greeting extends React.Component {
  render() {
    return (
      <div className="greeting">
        <h1>The smart to-do app for busy people.</h1>
        <br/>
        <Link to="/signup">Sign Up Free</Link>
      </div>
    );
  }
}

export default Greeting;
