import React from 'react'
import GoodHabits from './GoodHabits'
import BadHabits from './BadHabits'
import { NavLink } from 'react-router-dom'
export default class Tab extends React.Component{

  render(){

    return(
      <div>
      <NavLink to="/">
        new habit &nbsp;&nbsp;&nbsp;
      </NavLink>
      <NavLink to="/goodhabits">
        good habits &nbsp;&nbsp;&nbsp;
      </NavLink>
      <NavLink to="/badhabits">
        bad habits
      </NavLink>
    </div>

    )
  }

}
