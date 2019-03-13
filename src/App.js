import React, { Component } from 'react';
import './App.css';
import HabitForm from './components/HabitForm.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <HabitForm/> 
      </div>
    );
  }
}

export default App;
