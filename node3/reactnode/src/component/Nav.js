import React, {
  Component
} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <ul>
          <li><Link to="/">Nav</Link></li>
          <li><Link to="/about">about</Link></li>
        </ul>
      </div>
    );
  }
}

export default Nav;