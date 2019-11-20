
export const newHabits=(data)=>{

  return(dispatch) => {
    debugger
    dispatch({type: 'new_habit'})
      fetch('/habits', {
    method: 'post',
    accept: 'application/json',
    body: JSON.stringify()
  }).then(function(response) {
  console.log('hi')
  })
}
}


export const fetchHabits = () =>{
  return(dispatch)=>{
    dispatch({type: "show_habit"})
    debugger
  fetch('habits/1.json').then(response=>{console.log( response.json())})
  }
}
