// Source: https://adventofcode.com/2022/day/2
/*
- Input: two letters per line, separated by spaces.
  - First char: what opp will play: A (Rock) B (Paper) C (Scissors)
  - Second char: what you should play: X (Rock) Y (Paper) Z (Scissors)
  - "Winning every time would be suspicious, so the responses must have been carefully chosen."

Scoring
- Total: sum of your scores for each round
  - Shape you selected: 1 for Rock, 2 for Paper, 3 for Scissors
  - + Outcome of Round: 0 if loss, 3 if draw, 6 if WIN

Goal: What would your total score be if everything goes exactly according to your strategy guide?
*/

const path = require('path');
const fs = require('fs');

const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf-8');

const Win = 6;
const Loss = 0;
const Draw = 3;
const Rock = ['A', 'X'];
const Paper = ['B', 'Y'];
const Scissors = ['C', 'Z'];
let finalScore : number = 0;

const opponentWon: Function = (opp: string, you: string): boolean => {
  return (Rock.includes(opp) && Scissors.includes(you)) ||
         (Paper.includes(opp) && Rock.includes(you) ||
         (Scissors.includes(opp) && Paper.includes(you)));
}

const youWon: Function = (opp: string, you: string): boolean => {
  return (Scissors.includes(opp) && Rock.includes(you)) ||
         (Rock.includes(opp) && Paper.includes(you) ||
         (Paper.includes(opp) && Scissors.includes(you)));
}

const scoreForChoice: Function = (choice: string): number => {
  if (Rock.includes(choice)) {
    return 1;
  } else if (Paper.includes(choice)) {
    return 2;
  } else {
    return 3;
  }
};

let allRounds : string[] = input.split('\n');
allRounds.forEach(round => {
  const [ opp, you ] = [ round[0], round[2] ];

  if (opponentWon(opp, you)) {
    finalScore += Loss;
  } else if (youWon(opp, you)) {
    finalScore += Win;
  } else {
    finalScore += Draw;
  }

  finalScore += scoreForChoice(you);
})

console.log(finalScore);

export {};