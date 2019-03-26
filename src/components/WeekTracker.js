import React from 'react'


const Checkbox = (name) => (

  <div>
    <input type="checkbox"  name={name} value={name}/>
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
        <Checkbox name="monday"/>
        </label>
        <label>
          tues.
        <Checkbox name="monday" />
        </label> <label>
          wed.
        <Checkbox name="monday" />
        </label> <label>
          thurs.
        <Checkbox name="monday" />
        </label> <label>
          fri.
        <Checkbox name="monday" />
        </label> <label>
          sat.
        <Checkbox name="monday"/>
        </label> <label>
          sun.
        <Checkbox name="monday" />
        </label>


      </div>
    )
  }
}
