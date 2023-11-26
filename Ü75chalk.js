const result = require('./Alter.js');
const color = require('chalk');

console.log(color.yellow(`Addition is ${(result(3, 4))}.`));
console.log(color.blue(`Addition is ${(result(10, 6))}.`));
console.log(color.red(`Addition is ${(result(8, 2))}.`));
console.log(color.green("Ambika"));


