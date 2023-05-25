import logo from './logo.svg';
import './App.css';
import Game from './Game.js';
import { Component } from 'react';
import { render } from '@testing-library/react';

class App extends Component{
  render() {
    return (
      <div className='App'>
        <h1>Conway's Game of Life</h1>
        <Game />
      </div>
    );
  }
}

export default App;
