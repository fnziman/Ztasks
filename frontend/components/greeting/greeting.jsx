import React from 'react';
import { Link } from 'react-router-dom';
// import header

class Greeting extends React.Component {
  render() {
    return (
      <div className="greeting-container">
        <header>
          <Link className="greeting-buttons" to="/login">Log in</Link>
          <Link className="greeting-buttons" to="/signup">Sign up for free</Link>
        </header>
        <br/>
        <div className="greeting-blue">
          <h1>The smart to-do app for busy people.</h1>
          <br/>
          <Link to="/signup" className="greeting-signup-button">Sign Up Free</Link>
        </div>
      </div>
    );
  }
}

export default Greeting;
