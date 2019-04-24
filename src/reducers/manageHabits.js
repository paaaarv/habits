
import cuid from 'cuid'


export default function manageHabits(state={goodHabits:[], badHabits:[]}, action){
  switch(action.type){
    case "ADD_HABIT":
      let habit={
        id: cuid(),
        name: action.payload.name,
        frequency: action.payload.frequency,
        dayOrWeek: action.payload.dayOrWeek,
        type: action.payload.type}

        console.log(habit)

      if(action.payload.type === "GOOD"){

      return{...state, goodHabits: state.goodHabits.concat(habit)}
    }
      else{
        return{...state, badHabits: state.badHabits.concat(habit)}
      }
  case "DELETE_HABIT":
      if(action.payload.type === 'GOOD'){
        return {...state, goodHabits: state.goodHabits.filter(habit => habit.id !== action.payload.id)}
      }
      else{
          return {...state, badHabits: state.badHabits.filter(habit => habit.id !== action.payload.id)}
      }
  default:
    return state
}
}
