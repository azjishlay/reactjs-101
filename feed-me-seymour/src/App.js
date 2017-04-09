import React, { Component } from 'react';
import Seymour from './components/Seymour';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Feed Me Seymour</h2>
        </div>
        <Seymour />
      </div>
    );
  }
}

export default App;
