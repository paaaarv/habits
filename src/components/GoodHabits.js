import React from 'react';
import HabitForm from './HabitForm.js'
import { connect } from 'react-redux'

  const Habit = (name) => {
    return(
    <div>
    <h2>{this.props.name} </h2> <br/>
    <p> IDEAL: {this.props.frequency}/week </p>
    </div>
  )

  }


class GoodHabits extends React.Component{



  render(){
    return(
      <div>
      <h2> Habits To Support: </h2>
      <HabitForm type= {"good"}/>

      </div>

    )
  }
}

const mapStateToProps = state => {
  return{
    habits : state.habits
  }
}


export default connect(mapStateToProps)(GoodHabits)
