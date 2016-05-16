/**
 * Created by lippe on 13/05/2016.
 */
import {CALCULATE, CLEAR} from '../actions/calculator';
import moment from 'moment';

function calcDifference(first, last) {
  var dob = moment(new Date(Number.parseInt(first)));
  var research = moment(new Date(Number.parseInt(last)));
  var res = moment.duration(research.diff(dob));
  return  res.years() + " jaar, " + res.months() + " maanden, " + res.days() + " dagen.";
}

let initialState = {result: "Het verschil kon nog niet berekend worden"};

export default function (state = initialState, action) {
  switch (action.type) {
    case CALCULATE:
      return {result: calcDifference(action.birthdate, action.researchdate)};
    case CLEAR:
          return initialState;
    default:
      return state;
  }
}
