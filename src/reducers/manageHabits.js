
import cuid from 'cuid';
let habit;


export default function manageHabits(state={goodHabits:[], badHabits:[]}, action){
  switch(action.type){
    case "ADD_HABIT":

      habit={
        id: cuid(),
        name: action.payload.name,
        frequency: action.payload.frequency,
        type: action.payload.type}

      if(action.payload.type == "good" || action.payload.type ==
    "GOOD"){
      alert('hi youve reached')
      return {goodHabits: [state.goodHabits.push(habit)], ...state}
    }
      else{
        return{...state, badHabits: [state.badHabits.push(habit)]}
      };
  case "DELETE_HABIT":
    debugger
      if(action.payload.type == 'good' || action.payload.type == 'GOOD' ){
        return {...state, goodHabits: [state.goodHabits.filter(habit => habit.id !== action.payload.id)]}
      }
      else{
          return {...state, badHabits: [state.badHabits.filter(habit => habit.id !== action.payload.id)]}
      };
  default:
    return state
}
}
