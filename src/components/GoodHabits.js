import React from 'react';
import Habit from './Habit.js'
import WeekTracker from './WeekTracker.js'
import { connect } from 'react-redux'


class GoodHabits extends React.Component{

  renderHabits = () => {

    if(this.props.habits == undefined || this.props.habits.length == 0){
    return <p>"no habits...yet!"</p>
  }
  else{
   return  this.props.habits.map((habit) =>
   <Habit key={habit.id} id={habit.id} name={habit.name} delete={this.props.delete} frequency={habit.frequency} type={habit.type}>
      <WeekTracker frequency={habit.frequency}/>
   </Habit> )}}



  render(){
    return(
      <div>
        {this.renderHabits()}
      </div>

    )
  }
}

const mapStateToProps = state => {
  return{
    habits : state.habits.goodHabits
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    delete: habit => dispatch({type: "DELETE_HABIT" ,payload: habit})

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodHabits)
