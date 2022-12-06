const { crates, numberKeys, directions } = require('./parser');

directions.forEach((direction: string) => {
  const [a, start, end] = direction.split('-');
  let amount = Number(a);

  while (amount > 0) {
    let toMove = crates[start].pop();
    crates[end].push(toMove);
    amount -= 1;
  }
})
const topCrates: string[] = [];

numberKeys.forEach((number: string) => {
  topCrates.push(crates[number][crates[number].length - 1][1])
})

console.log(topCrates.join(''));