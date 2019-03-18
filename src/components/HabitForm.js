import React from 'react';

import { connect } from 'react-redux'



class HabitForm extends React.Component{
  constructor(props){
    super(props)


    this.state = {
      title: '',
      frequency: 1,
      notes: '',

    }

  }



  handleChange = (event) => {
    let change = event.target.name
    this.setState({
      change: event.target.value
    })
  }



  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addHabit(this.state)
  }
  render(){
    return(
      <div>
      <h5> Add a new Habit </h5>
      <form onSubmit = {this.handleSubmit}>

          <label>
            Habit Name:
            <input id="title" name="title" type="text" onChange = {this.handleChange}/>
          </label><br/>
          <label>
            Frequency:
            <input id="frequency" name="frequency" type="number" onChange = {this.handleChange}/>
          </label><br/>
          <button type="submit">Start a Habit! </button>
        </form>
        </div>


    )
  }



  }

  const mapDispatchToProps = dispatch =>{
    return{
      addHabit: formData => dispatch({type:"ADD_HABIT", payload: formData})
    }
  }

  export default connect(null, mapDispatchToProps)(HabitForm)
