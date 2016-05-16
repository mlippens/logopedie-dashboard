import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import calculator from './calculator';

const rootReducer = combineReducers({
  routing,
  calculator
});

export default rootReducer;
