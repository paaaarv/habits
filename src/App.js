import React, { Component } from 'react';
import './App.css';
import Heading from './components/Heading.js'
import Tab from './components/Tab'
import GoodHabits from './components/GoodHabits'
import BadHabits from './components/BadHabits'
class App extends Component {
  render() {
    return (
      <div className="App">
      <Heading/>
      <Tab name="good habits"/>
      <Tab name="bad habits"/>
      <GoodHabits/> <BadHabits/>
      </div>
    );
  }
}

export default App;
