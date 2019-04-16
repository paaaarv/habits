import React from 'react';
import Form from 'react-bootstrap/Form'
import FormCheck from 'react-bootstrap/FormCheck'
import Radio from 'react-bootstrap'
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
      <div >
      <h5> Add a new Habit </h5>
      <Form onSubmit = {this.handleSubmit}>


            <Form.Control className="col-8"size="lg" placeholder="habit name" id="name" name="name" type="text" value={this.state.name} onChange = {this.handleChange}/>
            <br/>

            <Form.Control className="col-4" size="md" id="frequency" name="frequency" type="number" value= {this.state.frequency} onChange = {this.handleChange}/>
             per


              <Form.Check isValid type="radio" name="dayOrWeek" id="day" label="DAY"/>
              <Form.Check isValid type="radio" name="dayOrWeek" id="week" label="WEEK"/>


          <button type="submit">Start a Habit! </button>
        </Form>
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
