import React from 'react';



export default class Checkbox extends React.Component{

  render(){
    return(
  <div>
    <input type="checkbox" name={this.props.name} onClick={this.props.checkClicked} />
  </div>
)
}
}
