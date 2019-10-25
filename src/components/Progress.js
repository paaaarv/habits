import React from 'react'





export default class Percentage extends React.Component{

  componentWillReceiveProps(props){
  }

  render(){

    return(
    <div className="progressBar">
    <div className="filledProgress" style={{width: `${this.props.percent}%`}}>
    </div>
    </div>




    )
  }

}
