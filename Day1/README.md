# TypeScript Lessons Learned/Reviewed

- Don't need to declare a type when you declare a variable with `const`
- TS doesn't like when you have the same named `const`s at a top level across multiple files. Still looking into the boundaries of this. Started [here](https://stackoverflow.com/questions/39486931/why-does-typescript-error-when-there-is-a-top-level-const-or-let-with-the-same-n).
- For really simple things, TS and JS are very similar.
- Having separate variables in TS saves a lot of problems. In JS, my reduce function in Part1 could easily be 1 line. But it was very difficult (impossible?) with TS. A separate variable for strings/numbers made it easier to read and handle. 