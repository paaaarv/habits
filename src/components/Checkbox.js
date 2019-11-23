import React from 'react';



export default class Checkbox extends React.Component{






  handleCheck=(e)=>{
    debugger
    this.props.checkClicked(e)}



  render(){
    return(
  <div>
    <input type="checkbox"  name={this.props.name} onClick={(e)=>this.handleCheck(e)}/>
  </div>
)
}
}
