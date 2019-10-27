import { combineReducers } from 'redux';
import manageCheckboxes from './manageCheckboxes'
import manageHabits from './manageHabits'


const rootReducer = combineReducers({
  habits: manageHabits,
  checkboxes: manageCheckboxes
})


export default rootReducer
