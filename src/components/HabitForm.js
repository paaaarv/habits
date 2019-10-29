import React from 'react';
import Form from 'react-bootstrap/Form'
import FormCheck from 'react-bootstrap/FormCheck'
import Radio from 'react-bootstrap'
import { connect } from 'react-redux'
import { newHabits } from '../actions/habitsActions.js'

class HabitForm extends React.Component{
  constructor(props){
    super(props)


    this.state = {
      name: '',
      frequency: 1,
      type: 'good'


    }
    this.handleSubmit = this.handleSubmit.bind(this)

  }



  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value.toUpperCase()
    })
  }



  handleSubmit = (event) => {
    event.preventDefault()
    debugger
    this.props.newHabit(event.target)
    this.props.addHabit(this.state)
    this.setState({
      name: '',
      frequency: 1,
      type: 'good'
    })
  }
  render(){
    return(
      <div className='habitForm'>
      <h5> add a new habit: </h5><br/>
      <Form onSubmit = {this.handleSubmit}>


            <Form.Control className="col-8"size="lg" placeholder="habit name" id="name" name="name" type="text" value={this.state.name} onChange = {this.handleChange}/>
            <br/>

            <Form.Control style={{float:'left'}} className="col-2" size="sm" id="frequency" name="frequency"  type="number" min='1' max = '7' value= {this.state.frequency} onChange = {this.handleChange}/>
           &nbsp; &nbsp; DAYS PER WEEK
              <br/><br/> TYPE OF HABIT: &nbsp; &nbsp;
              <Form.Check inline isValid type="radio" name="type" value="good" id="good" label="GOOD" onChange={this.handleChange}/>
               <Form.Check inline isValid type="radio" name="type" value="bad" id="bad" label="BAD" onChange={this.handleChange}/>

               <br/> <br/>
          <button type="submit">start a habit! </button>

        </Form>
        </div>


    )
  }



  }

  const mapDispatchToProps = dispatch =>{
    return{
      addHabit: formData => dispatch({type:"ADD_HABIT", payload: formData}),
      newHabit: () => dispatch(newHabits())
    }
  }

  export default connect(null, mapDispatchToProps)(HabitForm)
