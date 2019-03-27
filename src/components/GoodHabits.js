import React from 'react';
import Habit from './Habit.js'
import HabitForm from './HabitForm.js'
import { connect } from 'react-redux'




class GoodHabits extends React.Component{

  renderHabits = () => {if(this.props.habits == false){
    return <p>"no habits...yet!"</p>
  }
  else{
   return  this.props.habits.map((habit,id) => <Habit name={habit.title} key={id} frequency={habit.frequency} dayOrWeek={habit.dayOrWeek} /> )}}




  render(){
    return(
      <div>
      <h2> Habits To Support: </h2>
        <HabitForm type="good"/>
        {this.renderHabits()}
      </div>

    )
  }
}

const mapStateToProps = state => {
  return{
    habits : state.goodHabits
  }
}


export default connect(mapStateToProps)(GoodHabits)
