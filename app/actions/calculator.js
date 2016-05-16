/**
 * Created by lippe on 13/05/2016.
 */
export const CALCULATE = "CALCULATE";
export const CLEAR = "CLEAR";

export function calculateResult(birthdate, researchdate) {
  return {
    type: CALCULATE,
    birthdate,
    researchdate
  };
}

export function clearResult() {
  return {
    type: CLEAR
  };
}
