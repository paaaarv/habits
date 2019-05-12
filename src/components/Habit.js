import React from 'react'
import WeekTracker from './WeekTracker.js'
import Progress from './Progress'
const Habit = props => {
  return(
  <div className="container-fluid habits">
  <div className="row">
  <div className='col'>
  <h4>{props.name} </h4>
  <p> ideal: {props.frequency} PER WEEK</p>
  <button onClick={()=> props.delete(props)}> delete habit </button>
  </div>
  </div>
  <div className = "row">
  <div className="col">
  <WeekTracker/>
  </div>
  </div>
  </div>


)

}


export default Habit
