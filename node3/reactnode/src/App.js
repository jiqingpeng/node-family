import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import Rhead from './component/rhead.js';
import Rfood from './component/rfood.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Rhead></Rhead>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Rfood></Rfood>
      </div>
    );
  }
}

export default App;