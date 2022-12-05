const path = require('path');
const fs = require('fs');
const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf-8');

/*
- input: random letters separated by new lines
  - Each line: one rucksack
  - Split each line into two even(?) parts: two compartments
  - (1) Find the character that appears in BOTH compartments on a given line (*case-sensitive)
  - (2) Points, indexOf by index position in array (either + 1 or have a placeholder for first index position)
*/

const AlphabetPoints = [...' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const allRucksacks = input.split('\n');
let priorityScore : number = 0;

allRucksacks.forEach((ruckSack: string) => {
  const middle = ruckSack.length / 2
  const [first, second] = [ruckSack.slice(0, middle), ruckSack.slice(middle)];

  for (let i = 0; i < first.length; i ++ ) {
    if (second.includes(first[i])) {
      priorityScore += AlphabetPoints.indexOf(first[i]);
      break;
    }
  }
})

console.log(priorityScore);

export {};
