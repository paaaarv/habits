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

    this.setState({
      [event.target.name]: event.target.value.toUpperCase()
    })
  }



  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
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
          <label>
            Notes(optional):
            <textarea  id="notes" name="notes" type="text" onChange={this.handleChange}></textarea>
          </label> <br/>
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
