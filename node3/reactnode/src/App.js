import React, {
  Component
} from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';
import Home from './component/Home.js';
import My from './component/My.js';
import Login from './component/Login.js';
import Register from './component/Register.js';
class App extends Component {
  render() {
    return (
      <Router >
          <div className="App">
            <Route exact path="/" component={Home}/>
            <Route path="/My" component={My}/>
            <Route path="/Login" component={Login}/>
            <Route path="/Register" component={Register}/>
          </div>
      </Router>
    );
  }
}
export default App;