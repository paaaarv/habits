import React from 'react';

import { connect } from 'react-redux'



class HabitForm extends React.Component{
  constructor(props){
    super(props)


    this.state = {
      name: '',
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
    this.props.addHabit(this.state)
    this.setState({
      name: '',
      frequency: 1,
      dayOrWeek: 'week',
      notes: '',
      type: this.props.type
    })
  }
  render(){
    return(
      <div>
      <h5> Add a new Habit </h5>
      <form onSubmit = {this.handleSubmit}>

          <label>
            habit name
            <input id="name" name="name" type="text" value={this.state.name} onChange = {this.handleChange}/>
          </label><br/>
          <label>
            frequency
            <input id="frequency" name="frequency" type="number" value= {this.state.frequency} onChange = {this.handleChange}/>
             per
            <select id="dayOrWeek" name="dayOrWeek" value={this.state.dayOrWeek} onChange={this.handleChange}>
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
