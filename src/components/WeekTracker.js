import React from 'react'
import Checkbox from './Checkbox'
import Percentage from './Progress'
import { connect } from 'react-redux'

class WeekTracker extends React.Component{
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) =>{
    if(e.target.checked === true){
      this.props.addCheck(e.target)

      this.handlePercent()}
    else{
      this.props.deleteCheck(e.target)
      this.setState({
        ...this.state,
        count: this.state.count-1}, () => {this.handlePercent()}
      )
    }



  }


  handlePercent = () => {
    if(this.props.frequency < this.props.checkboxes){

     var percentage=100
    }
    else{
      debugger
     var percentage=Math.round((this.props.checkboxes/this.props.frequency) * 100)
    }
  }


  render() {
    var percentage = 0
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
        <h3> {percentage}% </h3>
        </div>
        <div className="col-5 justify-content-center">
        <Percentage percent = {percentage}/>
        </div>
        </div>
      </div>
    )
  }
}


  const mapStateToProps = state => {
    return{
      checkboxes: state.checkboxes.check
    }
  }


  const mapDispatchToProps = dispatch =>{
    return{
      addCheck: check => dispatch({type:"ADD_CHECK", payload: check}),
      deleteCheck: check => dispatch({type:"DELETE_CHECK", payload:check})
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(WeekTracker)
