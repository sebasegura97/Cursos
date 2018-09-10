import data from './data.js';
import modal from './modal.js';
import isLoading from './is-loading';

// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'

const rootReducer = combineReducers({
  data,
  modal,
  isLoading,
})

export default rootReducer
