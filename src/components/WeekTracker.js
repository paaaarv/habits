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
      this.props.addCheck(e.target)}

    else{
      this.props.deleteCheck(e.target)

    }
  }

  componentDidUpdate(){
    this.props.percentage(this.props)
  }





  render() {
    var percentage = 0
    return(
      <div className="container-fluid">
        <div className="row justify-content-center">
        <div className="col-5">
        <label>
          mon.
        <Checkbox data = {this.props.frequency} name="monday" checkClicked={this.handleChange}/>
        </label>
        <label>
          tues.
        <Checkbox data = {this.props.frequency} name="tuesday" checkClicked={this.handleChange} />
        </label> <label>
          wed.
        <Checkbox data = {this.props.frequency} name="wednesday" checkClicked={this.handleChange}/>
        </label> <label>
          thurs.
        <Checkbox data = {this.props.frequency} name="thursday" checkClicked={this.handleChange}/>
        </label> <label>
          fri.
        <Checkbox data = {this.props.frequency} name="friday" checkClicked={this.handleChange} />
        </label> <label>
          sat.
        <Checkbox data = {this.props.frequency} name="saturday"checkClicked={this.handleChange}/>
        </label> <label>
          sun.
        <Checkbox data = {this.props.frequency} name="sunday" checkClicked={this.handleChange}/>
        </label>
        </div>
        <div className= 'col-2 justify-content-center'>
        <h3> {this.props.percent}% </h3>
        </div>
        <div className="col-5 justify-content-center">
        <Percentage percent = {this.props.percent}/>
        </div>
        </div>
      </div>
    )
  }
}


  const mapStateToProps = state => {
    return{
      checkboxes: state.checkboxes.check,
      percent: state.checkboxes.percentage
    }
  }


  const mapDispatchToProps = dispatch =>{
    return{
      addCheck: check => dispatch({type:"ADD_CHECK", payload: check}),
      deleteCheck: check => dispatch({type:"DELETE_CHECK", payload:check}),
      percentage: data => dispatch({type: "HANDLE_PERCENT", payload: data})
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(WeekTracker)
