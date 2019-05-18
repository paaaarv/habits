export default function manageCheckboxes(state={checked:[]}, action){
  switch(action.type){

    case "ADD_CHECK":
      debugger
      return {checked: action.payload.name, ...state}
  default:
    return state
}
}
