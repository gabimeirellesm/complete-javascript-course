'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const obj = {
  a: 1,
  b: 2,
  c: [3, 4, 5],
  d: 'string',
  e: ['x', 'y', 'z'],

  f: function (teste1, teste2) {
    return [this.c[teste1], this.e[teste2]];
  },
};

let [first, second] = obj.c;
console.log([first, second]);

[first, second] = [second, first];
console.log([first, second]);

console.log(obj.f(1, 0));

const arr = [2, 4, [5, 6]];

const [a, , c] = arr;
console.log([a, c]);

const [h = 10, j = 10, k = 10] = [1, 2];
console.log([h, j, k]);
