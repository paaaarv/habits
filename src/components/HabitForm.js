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
      type: 'good'


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
      <div className='habitForm'>
      <h5> add a new habit: </h5><br/> 
      <Form onSubmit = {this.handleSubmit}>


            <Form.Control className="col-8"size="lg" placeholder="habit name" id="name" name="name" type="text" value={this.state.name} onChange = {this.handleChange}/>
            <br/>

            <Form.Control style={{float:'left'}} className="col-2" size="sm" id="frequency" name="frequency"  type="number" value= {this.state.frequency} onChange = {this.handleChange}/>
           &nbsp; &nbsp;PER: &nbsp; &nbsp;<Form.Check inline isValid type="radio" name="dayOrWeek" value="day" id="day" label="DAY" onChange={this.handleChange}/>
              <Form.Check inline isValid type="radio" name="dayOrWeek" value="week" id="week" label="WEEK" onChange={this.handleChange}/>
              <br/><br/> TYPE OF HABIT: &nbsp; &nbsp;
              <Form.Check inline isValid type="radio" name="type" value="good" id="good" label="GOOD" onChange={this.handleChange}/>
               <Form.Check inline isValid type="radio" name="type" value="bad" id="bad" label="BAD" onChange={this.handleChange}/>

          <div >
          <button type="submit">start a habit! </button>
          </div>
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
