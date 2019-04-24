import React, { Component } from 'react';
import './App.css';
import Heading from './components/Heading.js'
import Tab from './components/Tab'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GoodHabits from './components/GoodHabits'
import BadHabits from './components/BadHabits'
import HabitForm from './components/HabitForm'
class App extends Component {
  render() {
    return (
      <div className="App">
      <Heading/>
      <Router>
        <Tab/>
      <Switch>
        <Route exact path="/" component={HabitForm}/>
        <Route exact path= "/goodhabits" component={GoodHabits}/>
        <Route exact path= "/badhabits" component={BadHabits}/>
      </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
