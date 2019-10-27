export default function manageCheckboxes(state={checked:[]}, action){
  switch(action.type){

    case "ADD_CHECK":
      debugger
      console.log("hi")
      return {checked: [action.payload.name, ...state.checked]}

  default:
    return state
}
}
