import React from 'react'
import { NavLink } from 'react-router-dom'
export default class Tab extends React.Component{

  render(){

    return(
      <div>
      <NavLink className="col-4" to="/">
        new habit
      </NavLink>
      <NavLink className="col-4" to="/goodhabits">
        good habits
      </NavLink>
      <NavLink className="col-4" to="/badhabits">
        bad habits
      </NavLink>
    </div>

    )
  }

}
