export default function manageCheckboxes(state={check:0, percentage: 0}, action){
  switch(action.type){

    case "ADD_CHECK":
      var checked = state.check+1
      return {...state, check: checked};

      case "DELETE_CHECK":
      var checked = state.check-1
      return {...state, check: checked};

      case "HANDLE_PERCENT":
        if(action.payload.frequency > state.check){
          var percent=Math.round((state.check/action.payload.frequency) * 100)
        }
        else{
          var percent = 100
        }
        return{...state, percentage: percent}
  default:
    return state
}
}
