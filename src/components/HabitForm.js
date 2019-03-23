import React from 'react';

import { connect } from 'react-redux'



class HabitForm extends React.Component{
  constructor(props){
    super(props)


    this.state = {
      title: '',
      frequency: 1,
      dayOrWeek: 'week',
      notes: '',
      type: this.props.type


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
            habit name
            <input id="title" name="title" type="text" value={this.state.title} onChange = {this.handleChange}/>
          </label><br/>
          <label>
            frequency
            <input id="frequency" name="frequency" type="number" value= {this.state.frequency} onChange = {this.handleChange}/>
             per
            <select value={this.state.dayOrWeek} onChange={this.handleChange}>
              <option value="day">DAY</option>
              <option value="week">WEEK</option>
            </select>
          </label><br/>
          <label>
            notes(optional):
            <textarea  id="notes" name="notes" type="text" value={this.state.notes}onChange={this.handleChange}></textarea>
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
