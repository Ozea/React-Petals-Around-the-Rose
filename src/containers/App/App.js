import React, { Component } from 'react';
import Game from '../Game/Game';
import './App.css';

class App extends Component {
  state = {
    showGame: false
  }

  play = () => {
    this.setState({ showGame: true });
  }

  render() {
    return (
      <div className="App">
        <Game />
      </div>
    );
  }
}

export default App;
