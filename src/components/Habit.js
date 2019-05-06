import React from 'react'
import WeekTracker from './WeekTracker.js'
import Progress from './Progress'
const Habit = props => {
  return(
  <div className="container-fluid">
  <div className="row">
  <div className='col-7'>
  <h4>{props.name} </h4>
  <p> ideal: {props.frequency} per {props.dayOrWeek}</p>
  <button onClick={()=> props.delete(props)}> delete habit </button>
  <WeekTracker/>
  </div>
  <div className= 'col-5 d-flex align-items-center'>
  <h3> 20% </h3>
  <Progress/>
  </div>
  </div>
  </div>


)

}


export default Habit
