/* 
    - functor are functions that take a value and a function
    - the functor is responsible for unwrapping the individual values in passed in (array of string) of the value  and then passes each of those into the function and then takes the processed values and create a new structure for those values that ir returns

    - functors in JS for instance are : .map, .filter, .reduce
    - foreach is not a functor because it doesn't return anything in a structured form

    - functors is branch of mathematics cool category
*/

function stringFunctor(value, fn: Function) {
  var chars = value.split(""); //unwrapping value in individual parts

  return chars
    .map(function (char) {
      return String.fromCharCode(fn(char.charCodeAt(0))); //passing part for the function
    })
    .join("");
}
function plus1(value:number) {
  return value + 1;
}
function minus1(value: number) {
  return value - 1;
}
[3, 4].map(plus1); // = [4, 5]
stringFunctor("ABC", plus1); // returns "BCD"
stringFunctor("XYZ", minus1); // returns “RXY”
