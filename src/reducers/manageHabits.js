import React from 'react';



export default function manageHabits(state={habits:[]}, action){
  switch(action.type){
    case "ADD_HABIT":
      return{habits: state.habits.concat(action.payload)}

  default:
    return state
}
}
