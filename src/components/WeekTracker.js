import React from 'react'


const Checkbox = (name) => (

  <div>
    <input type="checkbox"  name={name} value={name} />
  </div>
)


export default class WeekTracker extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false
    }
  }
  

  render() {
    return(
      <div>
        <label>
          mon.
        <Checkbox name="monday"  />
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
