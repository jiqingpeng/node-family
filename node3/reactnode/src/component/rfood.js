import React, {
  Component
} from 'react';
import {
  Link
} from 'react-router-dom';
import Home from './Home.js';
import My from './My.js';
import '../css/rfood.css';
class rfood extends Component {
  render() {
    return (
      <div className="rfood">
        <footer >
          <ul className="rfood-footer">
            <Link to="/" className="rfood-nav"><span>主页</span></Link>
            <Link to="/My" className="rfood-nav"><span >我</span></Link>
          </ul>
        </footer>
      </div>
    );
  }
}

export default rfood;