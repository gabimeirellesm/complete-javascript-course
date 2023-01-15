'use strict';
function callAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    const output = `you are ${age} years old, cause born in ${birthYear}`;
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Gabriela';

console.log(callAge(1998));
