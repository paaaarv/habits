import React from 'react'
import Progress from './Progress'

function HabitDiv(props){
  return (
   <div className={'HabitDiv'}>
     {props.children}
   </div>
 );
}
const Habit = props => {
  return(
    <HabitDiv>
  <div className="container-fluid habits">
  <div className="row">
  <div className='col'>
  <h4>{props.name} </h4>
  <p> ideal: {props.frequency} DAYS PER WEEK</p>
  <button onClick={()=> props.delete(props)}> delete habit </button>
  </div>
  </div>
  <div className = "row">
  <div className="col">
    {props.children}
  </div>
  </div>
  </div>
  </HabitDiv>


)

}


export default Habit
