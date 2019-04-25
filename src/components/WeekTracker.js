import React from 'react'
import Checkbox from './Checkbox'
import Progress from './Progress'


export default class WeekTracker extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false
    }
  }

  handleChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value,
      ...this.state
    })


  }



  render() {
    return(
      <div>
        <label>
          mon.
        <Checkbox name="monday" checkClicked={this.handleChange}/>
        </label>
        <label>
          tues.
        <Checkbox name="tuesday" checkClicked={this.handleChange} />
        </label> <label>
          wed.
        <Checkbox name="wednesday" checkClicked={this.handleChange}/>
        </label> <label>
          thurs.
        <Checkbox name="thursday" checkClicked={this.handleChange}/>
        </label> <label>
          fri.
        <Checkbox name="friday" checkClicked={this.handleChange} />
        </label> <label>
          sat.
        <Checkbox name="saturday"checkClicked={this.handleChange}/>
        </label> <label>
          sun.
        <Checkbox name="sunday" checkClicked={this.handleChange}/>
        </label>

        <Progress/>
      </div>
    )
  }
}
