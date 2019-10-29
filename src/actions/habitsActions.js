
export function newHabits = (data) =>{
  return(dispatch) => {
    dispatch({type: 'new_habit'})
    debugger
      fetch('/habits', {
    method: 'post',
    body: JSON.stringify(data)
  }).then(function(response) {
    console.log( response.json())
  })
}
}

 //const fetchHabits = () =>{
//  return(dispatch)=>{
//    dispatch({type: "add_habit"})
  //  debugger
//    fetch('https://localhost:3000/habits/1.json').then(response=>{return response.json()}).then(console.log("hi"))
//  }
//}
