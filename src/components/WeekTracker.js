import React from 'react'
import Checkbox from './Checkbox'
import Progress from './Progress'


export default class WeekTracker extends React.Component{

  constructor(props){
    super(props)
     this.percentage = 0
    this.state = {
      count: 0
    }
  }


  handleChange = (checked) =>{
    if(checked === true){
      this.setState({
        count: this.state.count+1}, this.handlePercent
      )}
    else{
      this.setState({
        count: this.state.count-1}, this.handlePercent
      )
    }


  }


  handlePercent = () => {
    if(this.props.frequency < this.state.count){

      this.percentage=100
    }
    else{
      this.percentage=(this.state.count/this.props.frequency) * 100
    }
  }


  render() {

    return(
      <div className="container-fluid">
        <div className="row justify-content-center">
        <div className="col-5">
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
        <div className= 'col-2 justify-content-center'>
        <h3> {this.percentage}% </h3>
        </div>
        <div className="col-5 justify-content-center">
        <Progress percent={this.percentage} />
        </div>
        </div>
      </div>
    )
  }
}
