# TypeScript Lessons Learned/Reviewed

- I added `export {}` at the end of all of my ts files to make them stop yelling about me reusing `const` names. A lot of SO posts recommended it. Is it good practice? Not sure. But it worked and it's simple, so I'm using it for now. 
- Installed `ts-node` from npm so I don't have to create a js files with `tsc` in order to run my file every time. Way better. 
- I was thinking to set a Type (e.g. `type Rock = 'A' | 'X'`) and then check if a move is that type (e.g. `move typeof Rock` or `move instanceOf Rock`). No go, 'cause lack of classes. 
- Was this a good way to define functions in TS? ( the winning, losing, & scoring functions ). I'll look into that more later. 