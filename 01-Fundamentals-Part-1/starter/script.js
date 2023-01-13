const str = "12";
const num = Number(str);
console.log(num + 5);
console.log(str + 5);

const str2 = "gabi";
console.log(Number(str2));

const numb = 2;
const str3 = String(numb);
console.log(str3 + 5);

console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(true || true);
console.log(true || false);
console.log(false || false);

/* 
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 �
*/

let bill = 430;
let tip;

if (50 > bill < 300) {
  tip = bill * 0.15;
  console.log(tip);
} else {
  tip = bill * 0.2;
  console.log(tip);
}

let tip2 = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(tip2);

/* 
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK �
*/

let dolphins = (96 + 108 + 89) / 3;
let koalas = (88 + 91 + 110) / 3;

if (dolphins > koalas && dolphins > 100) {
  console.log("dolphins win");
} else if (dolphins < koalas && koalas > 100) {
  console.log("koala wins");
} else if (dolphins === koalas && dolphins > 100) {
  console.log("its a draw");
} else {
  console.log("no one wins");
}

const year = [1998, 1999, 2000];
console.log(2023 - year);

const gabriela = ["gabriela", "meirelles", 2023 - 1998, ["ju", "nat", "manu"]];
const types = [];

for (let i = 0; i < gabriela.length; i++) {
  types.push(typeof gabriela[i]);
}

console.log(types);

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  dice = Math.trunc(Math.random() * 6) + 1;
  console.log(`you took ${dice}`);
  if (dice === 6) {
    console.log("Loop finished because you took 6");
  }
}
