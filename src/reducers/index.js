import { combineReducers } from 'redux';
import isLoggedReducer from './isLogged';
import counterReducer from './counter';

// this file is only to collect all data to one storage object

const allReducers = combineReducers({ counter: counterReducer, isLogged: isLoggedReducer });

export default allReducers;
