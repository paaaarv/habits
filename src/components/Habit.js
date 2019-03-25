import React from 'react'
import WeekTracker from './WeekTracker.js'

const Habit = props => {
  return(
  <div>
  <h4>{props.name} </h4>
  <p> IDEAL: {props.frequency} per {props.dayOrWeek}</p>
  <WeekTracker/> 

  </div>
)

}


export default Habit
