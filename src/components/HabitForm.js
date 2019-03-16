import React from 'react';





export default class HabitForm extends React.Component{
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
      title: event.target.value
    })
  }



  handleSubmit = (event) => {
    event.preventDefault()
  }
  render(){
    return(
      <form onSubmit = {this.handleSubmit}>
        <div>
          <label>
            Habit Name:
            <input id="title" name="title" type="text" onChange = {this.handleChange}/>
          </label><br/>
          <label>
            Frequency:
            <input id="frequency" name="frequency" type="number" onChange = {this.handleChange}/>
          </label><br/>
          <button type="submit">Start a Habit! </button>
        </div>
        </form>



    )
  }



  }
