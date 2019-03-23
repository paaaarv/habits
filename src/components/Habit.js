import React from 'react'

const Habit = props => {
  return(
  <div>
  <h4>{props.name} </h4> 
  <p> IDEAL: {props.frequency} per {props.dayOrWeek}</p>
  </div>
)

}


export default Habit
