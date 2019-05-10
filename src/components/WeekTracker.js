import React from 'react'
import Checkbox from './Checkbox'
import Progress from './Progress'


export default class WeekTracker extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      count: 0
    }
  }


  handleChange = (checked) =>{
    if(checked == true){
      this.setState({
        count: this.state.count+1
      })}
    else{
      this.setState({
        count: this.state.count-1
      })
    }


  }




  render() {
    return(
      <div className="container-fluid">
        <div className="row justify-content-center">
        <div className="col">
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
        </div>
        <div className= 'col'>
        <h3> 20% </h3>
        <Progress/>
        </div>
        </div>
      </div>
    )
  }
}
