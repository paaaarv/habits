import React from 'react';



export default class Checkbox extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      checked: false
    }
  }

  
  render(){
    return(
  <div>
    <input type="checkbox"  name={this.props.name} />
  </div>
)
}
}
