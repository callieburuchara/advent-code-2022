// Source: https://adventofcode.com/2022/day/1

/*
- Input is a list of numbers, always valid
  - Visually, looks like there are no stray spaces
- Elves are separated by newlines
  - Each elf's calories are the sum of its partitioned numbers
- Goal: find the highest amount of summed calories (belonging to one single elf)

- Separate, then sum, then sort, then you have the largest
- *Sum as we separate by newslines, always keep track of the largest, replace largest as it gets beat, present largest after looking at every elf

- How to import from .txt file into TS?
*/

const path = require('path');
const fs = require('fs');

const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf-8');
const byElf = input.split('\n\n');
let largestCalories: number = 0;

byElf.forEach((elfCalories: string) => {
  const elfNumberCalories = elfCalories.split('\n').map(Number);
  const total = elfNumberCalories.reduce((s, n): number => s + n );
  largestCalories = total > largestCalories ? total : largestCalories;
})

console.log(largestCalories);