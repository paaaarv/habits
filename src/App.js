import React, { Component } from 'react';
import './App.css';
import Heading from './components/Heading.js'
import GoodHabits from './components/GoodHabits'
import BadHabits from './components/BadHabits'
class App extends Component {
  render() {
    return (
      <div className="App">
      <Heading/>
      <GoodHabits/> <BadHabits/>
      </div>
    );
  }
}

export default App;
