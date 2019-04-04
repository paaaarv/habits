import React from 'react';



export default class Checkbox extends React.Component{

  constructor(props){
    super(props)
    this.state= {
      isChecked: false
    }
  }




  handleCheck=()=>{

    this.setState({
      isChecked: !this.state.isChecked
    })
  }

  render(){
    return(
  <div>
    <input type="checkbox" checked={this.state.checked} name={this.props.name} onClick={this.handleCheck} />
  </div>
)
}
}
