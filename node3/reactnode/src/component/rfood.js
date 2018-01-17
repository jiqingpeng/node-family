import React, {
  Component
} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import '../css/rfood.css';
class rfood extends Component {
  render() {
    return (
      <div className="rfood">
        <footer >
            <Router>
              <div>
                <ul className="rfood-footer">
                  <Link to="/" className="rfood-nav"><span>主页</span></Link>
                  <Link to="/about" className="rfood-nav"><span >我</span></Link>
                </ul>
                
                <Route exact path="/" component={Home}/><Route path = "/about"
                  component = {
                    About
                }
                />
              </div>
            </Router>
        </footer>
      </div>
    );
  }
}
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)
export default rfood;