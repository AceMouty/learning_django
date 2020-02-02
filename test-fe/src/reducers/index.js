// This is where all reducers will be stored / meet up but will be defined in different files

import { combineReducers } from 'redux'
import leads from './leads'


// For any reducers created pass them into here
export default combineReducers({
  leads,
})