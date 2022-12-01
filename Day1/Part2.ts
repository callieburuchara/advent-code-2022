// Source: https://adventofcode.com/2022/day/2

const path2 = require('path');
const fs2 = require('fs');

const input2 = fs2.readFileSync(path2.join(__dirname, './input.txt'), 'utf-8');
const byElf2 = input2.split('\n\n');

let first: number = 0;
let second : number = 0;
let third : number = 0;

byElf2.forEach((elfCalories: string) => {
  const elfNumberCalories = elfCalories.split('\n').map(Number);
  const total = elfNumberCalories.reduce((s, n): number => s + n );
  if (total > first) {
    [ third, second, first ] = [ second, first, total ]
  } else if (total > second) {
    [third, second] = [second, total];
  } else if (total > third) {
    third = total;
  }
})

const sumTotal = first + second + third;

console.log(sumTotal);