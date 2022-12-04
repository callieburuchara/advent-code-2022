/*
- Input: two letters per line, separated by spaces.
  - First char: what opp will play: A (Rock) B (Paper) C (Scissors)
  - Second char: ** How the round should end: X LOSE, Y DRAW, Z WIN.

Scoring
- Total: sum of your scores for each round
  - Shape you selected: 1 for Rock, 2 for Paper, 3 for Scissors
  - + Outcome of Round: 0 if loss, 3 if draw, 6 if WIN

- Start a score at 0
- Iterate through every round
  - Capture the opponent's move and the needed outcome of the round
  - If outcome is loss, use youMustLose function (AND nothing else, cause + zero points for loss)
    - switch statement
  - If outcome is win, use youMustWin function AND win points
    - switch statement
  - else
    - Add points for whatever number opp choice has AND draw points
*/

const path = require('path');
const fs = require('fs');

const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf-8');

const Loss = 'X';
const Draw = 'Y'; // unnecessary because of 'else' though I could make it more exlicit -shrug-
const Win = 'Z';

const Rock = 'A';
const Paper = 'B';
const Scissors = 'C';
let finalScore : number = 0;

const youMustLose: Function = (opp: string): string => {
  switch(opp) {
    case Rock:
      return Scissors;
    case Paper:
      return Rock;
    case Scissors:
      return Paper;
    default:
      return '';
  }
}

const youMustWin: Function = (opp: string): string => {
  switch(opp) {
    case Scissors:
      return Rock;
    case Rock:
      return Paper;
    case Paper:
      return Scissors;
    default:
      return '';
  }
}

const scoreForChoice: Function = (choice: string): number => {
  if (Rock === choice) {
    return 1;
  } else if (Paper === choice) {
    return 2;
  } else {
    return 3;
  }
};

let allRounds : string[] = input.split('\n');

allRounds.forEach(round => {
  const [ opp, outcome ] = [ round[0], round[2] ];
  let choice;

  if (outcome === Loss) {
    choice = youMustLose(opp);
  } else if (outcome === Win) {
    choice = youMustWin(opp); 
    finalScore += 6;
  } else {
    choice = opp;
    finalScore += 3;
  }

  finalScore += scoreForChoice(choice);
})

console.log(finalScore);

export {};