import React from 'react'
import GoodHabits from './GoodHabits'
import BadHabits from './BadHabits'
import { NavLink } from 'react-router-dom'
export default class Tab extends React.Component{

  render(){

    return(
      <div>
      <NavLink to="/">
        new habit
      </NavLink>
      <NavLink to="/goodhabits">
        good habits
      </NavLink>
      <NavLink to="/badhabits">
        bad habits
      </NavLink>
    </div>

    )
  }

}
