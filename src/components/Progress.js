import React from 'react'


const Percentage = (props) => {
  return(
    <div className="filledProgress" style={{width: `${props.progress}%`}}>
    </div>
  )
}



export default class Progress extends React.Component{



  render(){
    return(
    <div className="progressBar">
      <Percentage progress={20}/>
    </div>




    )
  }

}
