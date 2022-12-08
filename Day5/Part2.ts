const { crates, numberKeys, directions } = require('./parser');

directions.forEach((direction: string) => {
  const [a, start, end] = direction.split('-');
  let amount = Number(a); 
  let startIndex = crates[start].length - amount

  let toMove = crates[start].slice(startIndex);
  crates[start] = crates[start].slice(0, startIndex);
  crates[end] = [...crates[end], ...toMove];
})
const topCrates: string[] = [];

numberKeys.forEach((number: string) => {
  topCrates.push(crates[number][crates[number].length - 1][1])
})

console.log(topCrates.join(''));

export {};