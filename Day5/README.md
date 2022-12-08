# TypeScript Lessons Learned/Reviewed

- I needed to dynamically build an object where I didn't know the value of the key, only the type. How? Object index signature:
```ts
type CrateObject = {[key: string]: string[]}
const crateObj : CrateObject = {};
```
- An array of string arrays type declaration: 
```ts
let newArray: string[][]
```