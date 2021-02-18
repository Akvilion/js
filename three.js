// "use strict";

function printForecast(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `...${arr[i]}C in ${i + 1} days `;
  }
  return str;
}

let a = [17, 21, 23];
console.log(printForecast(a));
