import React from 'react';
import Habit from './Habit.js'
import HabitForm from './HabitForm.js'
import { connect } from 'react-redux'




class GoodHabits extends React.Component{

  renderHabits = () => {this.props.habits.map((habit) => <Habit name={habit.name} frequency={habit.frequency}/>)}





  render(){
    return(
      <div>
      <h2> Habits To Support: </h2>


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
