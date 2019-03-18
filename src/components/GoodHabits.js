import React from 'react';
import HabitForm from './HabitForm.js'

  const Habit = (name) => {
    return(
    <div>
    <h2>{this.props.name} </h2> <br/>
    <p> IDEAL: {this.props.frequency}/week </p>
    </div>
  )

  }


export default class GoodHabits extends React.Component{



  render(){
    return(
      <div>
      <h2> Habits To Support: </h2>
      <HabitForm/>

      </div>

    )
  }
}
