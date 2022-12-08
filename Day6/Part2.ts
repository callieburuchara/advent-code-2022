const path = require('path');
const fs = require('fs');
const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf-8');

let currentNumber = 14;

for(let i = 0; i < input.length - 4; i++) {
  const currentLetters = input.slice(i, i + 14);
  if (currentLetters.length !== new Set(currentLetters).size) {
    currentNumber += 1;
  } else {
    break;
  }
}

console.log(currentNumber);

export {};