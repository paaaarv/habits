export default function manageCheckboxes(state={check:0}, action){
  switch(action.type){

    case "ADD_CHECK":
      return {check: state.check+1 };

      case "DELETE_CHECK":
        return {check: state.check - 1};

  default:
    return state
}
}
