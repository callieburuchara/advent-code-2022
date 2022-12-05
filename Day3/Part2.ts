const path = require('path');
const fs = require('fs');
const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf-8');

/*
- same input as last time
- still need to split by rucksack
- but also need to look at three rucksacks at a time (so maybe use a for loop instead of a forEach)
  - Could do what I did in part 1 to find the letters in rucks 1 & 2
  - then use that short list to look in ruck 3
  - once a letter is found from that short list in ruck 3, score it and add it to final score
*/

const AlphabetPoints = [...' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const allRucksacks = input.split('\n');
let priorityScore : number = 0;

for (let i = 0; i < allRucksacks.length; i += 3 ) {
  const [first, second, third] = [allRucksacks[i], allRucksacks[i+1], allRucksacks[i+2]]
  let dupLetters: string = '';

  for (let i = 0; i < first.length; i ++ ) {
    if (second.includes(first[i])) {
      dupLetters += first[i];
    }
  }
  
  for (let i = 0; i < dupLetters.length; i ++ ) {
    if (third.includes(dupLetters[i])) {
      priorityScore += AlphabetPoints.indexOf(dupLetters[i]);
      break;
    }
  }
}

console.log(priorityScore);

export {}
