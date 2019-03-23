import React from 'react';



export default function manageHabits(state={goodHabits:[], badHabits:[]}, action){
  switch(action.type){
    case "ADD_HABIT":
      if(action.payload.type === "good"){
      return{goodHabits: state.goodHabits.concat(action.payload)}
    }
      else{
        return{badHabits: state.badHabits.concat(action.payload)}
      }

  default:
    return state
}
}
