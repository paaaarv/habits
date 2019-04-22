import React from 'react'




export default class Tab extends React.Component{



  handleClick = (name) => {
    console.log(name)
  }

  render(){
    return(
      <div>

        <h3 onClick={this.handleClick(this.props.name)}> this.props.name </h3>
      </div>

    )
  }

}
