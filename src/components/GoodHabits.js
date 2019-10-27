import React from 'react';
import Habit from './Habit.js'
import { connect } from 'react-redux'




class GoodHabits extends React.Component{

  renderHabits = () => {
    debugger
    if(this.props.habits == undefined){
    return <p>"no habits...yet!"</p>
  }
  else{
   return  this.props.habits.map((habit) => <Habit key={habit.id} id={habit.id} name={habit.name} delete={this.props.delete} frequency={habit.frequency} type={habit.type}/> )}}




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
    habits : state.goodHabits
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    delete: habit => dispatch({type: "DELETE_HABIT" ,payload: habit})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodHabits)
