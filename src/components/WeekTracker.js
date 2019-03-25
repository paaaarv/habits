import React from 'react'


const Checkbox = (name,  onChange) => (
  <div>
    <input type="checkbox" name={name} value={name} onChange={onChange}/>
  </div>
)


export default class WeekTracker extends React.Component{
  constructor(props){
    super(props)

  }

  handleChange = () =>{

  }
  render() {
    return(
      <div>
        <label>
          mon.
        <Checkbox name="monday"  onChange={this.handleChange()}/>
        </label>
        <label>
          tues.
        <Checkbox name="monday"  onChange={this.handleChange()}/>
        </label> <label>
          wed.
        <Checkbox name="monday"  onChange={this.handleChange()}/>
        </label> <label>
          thurs.
        <Checkbox name="monday"  onChange={this.handleChange()}/>
        </label> <label>
          fri.
        <Checkbox name="monday"  onChange={this.handleChange()}/>
        </label> <label>
          sat.
        <Checkbox name="monday"  onChange={this.handleChange()}/>
        </label> <label>
          sun.
        <Checkbox name="monday"  onChange={this.handleChange()}/>
        </label>


      </div>
    )
  }
}
