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

const udemy = {
  courseName: 'academia',
  categories: {
    java: {
      hour: 10,
      level: 'hard',
    },
    python: {
      hour: 20,
      level: 'easy',
    },
    javascript: {
      hour: 60,
      level: 'medium',
    },
  },
  company: ['hexa', 'bnp'],
  duraction: 'two months',
};

/* const { courseName, company, categories } = udemy;
console.log({ courseName, company, categories }); */
/* 
const { companies = ['a', 'b'], categories: lessons = {} } = udemy;
console.log(companies, lessons);
console.log(udemy); */

/* const { fri } = openingHours;
console.log(fri); */

const arr2 = ['b', 'n', 'm'];
console.log(arr2);
console.log(...arr2);

const arr3 = [1, 2, 3];
const newArr = [...arr3, 4, 5];
console.log(arr3);
console.log(newArr);

const apelido = 'gabi';
const letters = [...apelido, , 'M.'];
console.log(letters);

let bb;
const aa = bb ?? 10;
console.log(aa);

const loop = [1, 2, 3, 4, 5, 6];

for (const numb of loop) {
  console.log(numb);
}

const obbj = {
  name: 'gabi',
  hobbies: {
    morning: 'gym',
    afternoon: 'read',
    night: 'walk',
  },
  friends: {
    manu: 'new',
    tata: 'old',
  },
};

for (const activities of Object.values(obbj.hobbies)) {
  console.log(activities);
}

/* const restaurant2 = {
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

for (const day of Object.keys(openingHours)) {
  console.log(day);
}

 */

const airline = 'Tap';
const plane = 'A320';
