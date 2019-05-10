import React from 'react';



export default class Checkbox extends React.Component{

  constructor(props){
    super(props)
    this.state= {
      isChecked: false
    }
  }





  handleCheck=(e)=>{

    this.setState({
      isChecked: true},this.props.checkClicked(e))

  }


  render(){
    return(
  <div>
    <input type="checkbox" checked={this.state.checked} name={this.props.name} value= {this.state.isChecked} onClick={(e)=>this.handleCheck(e)}/>
  </div>
)
}
}
