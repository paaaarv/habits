import React from 'react';



export default function manageHabits(state={habits:[]}, action){
  switch(action.type){
    case "ADD_HABIT":
      console.log('adding habit')

  default:
    return state
}
}
