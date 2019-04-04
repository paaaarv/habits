import React from 'react'
import WeekTracker from './WeekTracker.js'

const Habit = props => {
  return(
  <div>
  <h4>{props.name} </h4>
  <p> ideal: {props.frequency} per {props.dayOrWeek}</p>
  <button onClick={()=> props.delete(props)}> delete habit </button>
  <WeekTracker/>

  </div>
)

}


export default Habit
