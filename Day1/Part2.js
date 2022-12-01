// Source: https://adventofcode.com/2022/day/2
var path2 = require('path');
var fs2 = require('fs');
var input2 = fs2.readFileSync(path2.join(__dirname, './input.txt'), 'utf-8');
var byElf2 = input2.split('\n\n');
var first = 0;
var second = 0;
var third = 0;
byElf2.forEach(function (elfCalories) {
    var _a, _b;
    var elfNumberCalories = elfCalories.split('\n').map(Number);
    var total = elfNumberCalories.reduce(function (s, n) { return s + n; });
    if (total > first) {
        _a = [second, first, total], third = _a[0], second = _a[1], first = _a[2];
    }
    else if (total > second) {
        _b = [second, total], third = _b[0], second = _b[1];
    }
    else if (total > third) {
        third = total;
    }
});
var sumTotal = first + second + third;
console.log(sumTotal);
