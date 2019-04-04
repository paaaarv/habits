import React from 'react';
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

      if(action.payload.type === "good"){
      return{goodHabits: state.goodHabits.concat(habit)}
    }
      else{
        return{badHabits: state.badHabits.concat(habit)}
      }
  case "DELETE_HABIT":
      if(action.payload.type === 'good'){
        return {goodHabits: state.goodHabits.filter(habit => habit.id !== action.payload.id)}
      }
  default:
    return state
}
}
