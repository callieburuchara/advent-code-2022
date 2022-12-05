const path = require('path');
const fs = require('fs');
const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf-8');

/*
- input: string numbers, pairs of ranges: xx-xx, xx-xx (could be single digit or double digit)
- count how many pairs overlap at all

- Remember to convert them from strings to numbers before comparing them
*/

const allPairs = input.split('\n');
let pairCount: number = 0;

allPairs.forEach((pair: string) => {
  const [first, second] = pair.split(',')
  const [first1, second1] = first.split('-').map(Number);
  const [first2, second2] = second.split('-').map(Number);

  if ((first1 <= first2 && second1 >= first2) ||
      (first1 <= second2 && second1 >= second2) ||
      (first2 <= first1 && second2 >= first1) ||
      (first2 <= second1 && second2 >= second1)) {
        pairCount += 1;
       }
})

console.log(pairCount);

export {};