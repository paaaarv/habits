import React from 'react'
import Checkbox from './Checkbox'



export default class WeekTracker extends React.Component{


  render() {
    return(
      <div>
        <label>
          mon.
        <Checkbox name="monday" />
        </label>
        <label>
          tues.
        <Checkbox name="tuesday" />
        </label> <label>
          wed.
        <Checkbox name="wednesday" />
        </label> <label>
          thurs.
        <Checkbox name="thursday" />
        </label> <label>
          fri.
        <Checkbox name="friday" />
        </label> <label>
          sat.
        <Checkbox name="saturday"/>
        </label> <label>
          sun.
        <Checkbox name="sunday" />
        </label>


      </div>
    )
  }
}
