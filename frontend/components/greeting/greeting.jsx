import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  render() {
    return (
      <div className="greeting-container">
        <header className="greeting-header">
          <div className="greeting-logo">
            <p>Ztasks</p>
          </div>
          <div className="greeting-buttons">
            <Link className="greeting-button" to="/login">Log in</Link>
            <Link className="greeting-button" to="/signup">Sign up for free</Link>
          </div>
        </header>
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
