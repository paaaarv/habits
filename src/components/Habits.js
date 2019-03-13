import React from 'react';


  const Habit = (name) => {
    <div>
    <h2>{this.props.name} </h2> <br>
    <p> IDEAL: {this.props.frequency}/week </p>
    </div>


  }


export default class Habits extends React.Component{



  render(){
    return(
      <div>
        <Habit/>
      </div>

    )
  }
}
