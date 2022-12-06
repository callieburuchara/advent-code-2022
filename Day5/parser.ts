const path = require('path');
const fs = require('fs');
const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf-8');
let [crates, ...directions] = input.split('move ');

const condenseEmptySpots = (array: string[][]): string[][] => {
  let newArray: string[][] = [];

  array.forEach(subArray => {
    let amountOfSpaces = 0;
    const newSubArray : string[] = [];

    subArray.forEach(char => {
      if (char) {
        newSubArray.push(char)
      } else {
        amountOfSpaces += 1;
        if (amountOfSpaces === 4) {
          newSubArray.push('');
          amountOfSpaces = 0;
        }
      }
    })
    
  newArray.push(newSubArray);
  });

  return newArray;
}

const formatCratesAndKeys = (crates: string) => {
  type CrateObject = {[key: string]: string[]}
  const crateObj : CrateObject = {};

  let cratesArray = crates.split(/\n/).map((crate: string) => {
    return crate.split(/\s/);
  })

  const numberKeys = cratesArray[cratesArray.length - 3].filter(str => str);
  cratesArray = condenseEmptySpots(cratesArray.slice(0, cratesArray.length - 3));
  let endingIndex = cratesArray.length - 1;

  for (endingIndex; endingIndex >= 0; endingIndex--) {
    let currentCrate = cratesArray[endingIndex];
    
    numberKeys.forEach((key: string) => {
      const index = Number(key) - 1;
      if (currentCrate[index] === '') return;

      if (crateObj[key]) {
          crateObj[key].push(currentCrate[index]);
        } else {
          crateObj[key] = [currentCrate[index]];
        }
    })
  }

  return [crateObj, numberKeys];
}

const formatDirections = (directions: string[]) => {
  return directions.map((line: string) => {
    return line.trim().replace(' from ', '-').replace(' to ', '-')
  })
}

let numberKeys;

[crates, numberKeys] = formatCratesAndKeys(crates);
directions = formatDirections(directions);

export { crates, numberKeys, directions };